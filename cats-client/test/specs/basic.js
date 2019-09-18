const assert = require("assert");
const { percySnapshot } = require("@percy/webdriverio");

// In your wdio.conf.js

describe("webdriver.io page", () => {
  it("should have the right title", () => {
    browser.url("https://webdriver.io");
    const title = browser.getTitle();
    percySnapshot(browser, "webdriver.io page");
    assert.strictEqual(
      title,
      "WebdriverIO · Next-gen WebDriver test framework for Node.js"
    );
  });
});
