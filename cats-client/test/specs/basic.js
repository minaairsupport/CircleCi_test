const assert = require("assert");
const httpServer = require("http-server");
const { percySnapshot } = require("@percy/webdriverio");

let server = null;

before(function() {
  // Start local server to host app under test.
  server = httpServer.createServer({ root: `${__dirname}/../site` });
  server.listen(PORT);
});

after(function() {
  // Shut down the HTTP server.
  server.close();
});

describe("webdriver.io page", () => {
  it("should have the right title", () => {
    browser.url("https://webdriver.io");
    percySnapshot(browser, "webdriver.io page");
    const title = browser.getTitle();

    assert.strictEqual(
      title,
      "WebdriverIO · Next-gen WebDriver test framework for Node.js"
    );
  });
});
