const assert = require("assert");
const { percySnapshot } = require("@percy/webdriverio");

// In your wdio.conf.js
before: function (capabilities, specs) {
    // Import percySnapshot function
    const { percySnapshot } = require('@percy/webdriverio');
    // Make percySnapshot available as a global variable in all wdio tests
    global.percySnapshot = percySnapshot;
  }

describe("webdriver.io page", () => {
  it("should have the right title", () => {
    browser.url("https://webdriver.io");
    const title = browser.getTitle();
    assert.strictEqual(
      title,
      "WebdriverIO · Next-gen WebDriver test framework for Node.js"
    );
    percySnapshot(browser, this.test.fullTitle())
  });
});
