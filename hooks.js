const { Builder } = require("selenium-webdriver");
exports.mochaHooks = {
  beforeEach: async function () {
    // start browser
    driver = await new Builder().forBrowser("chrome").build();
    // set waits
    await driver.manage().setTimeouts({ implicit: 5000 });
  },
  afterEach: async function () {
    // close browser
    await driver.quit();
  },
};
