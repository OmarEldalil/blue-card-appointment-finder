const {By, until} = require('selenium-webdriver');
const {configs, countries, setConfig, getConfig} = require('./config');
const {buildDriver} = require('./chromeDriver');
const {selectors} = require('./selectors');
const {sleep, setChatId, sendMessage, selectChoice, collectInput, yesOrNoQuestion} = require("./helpers");

let driver = null

async function retryClickAnElement(selector, numberOfRetries = 10, retrialTimeInSeconds = getConfig(configs.DEFAULT_WAITING_TIME)) {
    let remainingTrials = numberOfRetries;
    while (remainingTrials > 0) {
        await sleep(retrialTimeInSeconds * 1000);
        try {
            await driver.findElement(By.xpath(selector)).click();
            return;
        } catch (e) {
            console.log(`Element ${selector} didn't appear`, remainingTrials);
            if(remainingTrials === 1){
                throw e;
            }
        } finally {
            remainingTrials--;
        }
    }
}

async function retryFindingAppointment() {
    // the session is 30 minutes, and refresh time is every 5 seconds.
    let remainingTrials = 30 * 60;
    while (remainingTrials > 0) {
        try {
            await retryClickAnElement(selectors.findAppointmentButton, 10, 5);
            if (await checkAvailableAppointment()) {
                console.log('Found an Appointment 🎉🎉🎉');
                await sleep(2000);
                await sendMessage(driver.getCurrentUrl());
                return;
            }
        } catch (e) {
            console.log(`Element ${selectors.currentActiveStepClass} didn't appear`, remainingTrials);
        } finally {
            remainingTrials--;
        }
    }

}

async function checkAvailableAppointment() {
    await driver.wait(until.elementLocated(By.className(selectors.currentActiveStepClass)));
    const activeStep = await driver.findElement(By.className(selectors.currentActiveStepClass)).getText();
    return !(activeStep.indexOf('Servicewahl') > 0 || activeStep.indexOf('2') > 0);
}

async function prepareUserData() {
    await collectUserData()
    await setChatId()
    await sendMessage('starting');
}

async function start() {
    try {
        driver = await buildDriver();
        await driver.get(selectors.appointmentWebsiteUrl);
        await driver.findElement(By.xpath(selectors.bookAnAppointmentButtonPath)).click();

        await retryClickAnElement(selectors.agreeButtonPath);
        await retryClickAnElement(selectors.agreeNextButtonXpath);
        await retryClickAnElement(selectors.nationality(getConfig(configs.NATIONALITY_ID)), 20);
        await retryClickAnElement(selectors.numberPersons(getConfig(configs.NUMBER_OF_PERSONS)), 10, 4);
        await retryClickAnElement(selectors.doYouLiveWithYourFamilySelector(getConfig(configs.DO_YOU_LIVE_WITH_YOUR_FAMILY)));
        if (getConfig(configs.DO_YOU_LIVE_WITH_YOUR_FAMILY)) {
            await retryClickAnElement(selectors.familyMemberNationality(getConfig(configs.SPOUSE_NATIONALITY_ID)));
        }
        await retryClickAnElement(selectors.residencePermitOption, 10, 3);
        await retryClickAnElement(selectors.employmentReason, 10, 3);
        await retryClickAnElement(selectors.blueCard);
        await retryFindingAppointment();

    } catch (e) {
        console.log(e);
        await sleep(2000);
        await driver.quit();
        await start();
    }
}

async function collectUserData() {
    const nationality = await selectChoice('What is your nationality?', Object.keys(countries));
    setConfig(configs.NATIONALITY_ID, countries[nationality])
    setConfig(configs.NUMBER_OF_PERSONS, await selectChoice('what is the number of persons applying?', ['1', '2', '3', '4', '5', '6', '7', '8']))
    const doYouLiveWithYourFamily = await yesOrNoQuestion('Do You Live With Your Family?');
    setConfig(configs.DO_YOU_LIVE_WITH_YOUR_FAMILY, doYouLiveWithYourFamily)
    if (doYouLiveWithYourFamily) {
        const spouseNationality = await selectChoice('What is your Spouse nationality?', Object.keys(countries));
        setConfig(configs.SPOUSE_NATIONALITY_ID, countries[spouseNationality])

    }
    console.log(`Now getting to telegram token collection
    go to  https://web.telegram.org/ and search for botFather, click on it.
    send /newbot in the chat, it will ask you about the bot user name, choose something like 'blue_card_appointment_finder_bot' and hit enter.
    the bot will be created and you will get the token, copy the token and go to the search again and enter the bot name i.e. 'blue_card_appointment_finder_bot' and click start
    enter the token in the following prompt.
    `);
    const telegramToken = await collectInput('What is your telegram token?');
    setConfig(configs.TELEGRAM_CHAT_BOT_TOKEN, telegramToken)
}

async function main() {
    await prepareUserData();
    await start();
}

main()
