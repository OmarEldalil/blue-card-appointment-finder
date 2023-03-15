const chrome = require("selenium-webdriver/chrome");
const {Builder, Browser} = require("selenium-webdriver");

const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--disable-blink-features=AutomationControlled')
const buildDriver = async () => await new Builder().forBrowser(Browser.CHROME).setChromeOptions(chromeOptions).build();


exports.buildDriver = buildDriver;
