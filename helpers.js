const request = require("request-promise");
const {configs, getConfig} = require("./config");
const {Select, prompt, Toggle} = require("enquirer");
exports.sleep = async (time) => await new Promise(r => setTimeout(r, time));

let chatId = null;

exports.setChatId = async () => {
    try {
        const res = await request.get(`https://api.telegram.org/bot${getConfig(configs.TELEGRAM_CHAT_BOT_TOKEN)}/getUpdates`, {json: true})
        if (res.result[0]?.message?.chat?.id) {
            chatId = res.result[0]?.message?.chat?.id;
            console.log('Chat Id: ', chatId);
            return;
        }
    } catch (e) {
        console.log(e);
    }
    throw Error('Chat ID cannot be found.')
}

exports.sendMessage = async (text) => {
    await request.post(`https://api.telegram.org/bot${getConfig(configs.TELEGRAM_CHAT_BOT_TOKEN)}/sendMessage`,
        {
            body: {
                "chat_id": chatId,
                text
            },
            json: true
        })
}

exports.selectChoice = async (message, choices) => {
    const mySelect = new Select({
        choices,
        name: 'answer',
        message
    })
    return await mySelect.run();
}

exports.yesOrNoQuestion = async (message) => {
    const mySelect = new Toggle({
        enabled: 'Yes',
        disabled: 'No',
        name: 'answer',
        message
    })
    return await mySelect.run();
}

exports.collectInput = async (message) => {
    const {selection} = await prompt([
        {
            type: 'input',
            name: 'selection',
            message
        }
    ]);
    return selection;
}
