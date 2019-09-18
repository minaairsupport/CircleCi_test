const assert = require("assert");
const httpServer = require("http-server");
const { percySnapshot } = require("@percy/webdriverio");

describe("webdriver.io page", () => {
  // let server = null;
  // const PORT = 8000;
  // const TEST_URL = `http://localhost:${PORT}`;

  // before(function() {
  //   // Start local server to host app under test.
  //   server = httpServer.createServer({ root: `${__dirname}/testapp` });
  //   server.listen(PORT);
  // });

  // after(function() {
  //   // Shut down the HTTP server.
  //   server.close();
  // });

  it("should have the right title", async () => {
    await browser.url("https://webdriver.io");

    const title = await browser.getTitle();
    assert.strictEqual(
      title,
      "WebdriverIO · Next-gen WebDriver test framework for Node.js"
    );
    await percySnapshot(browser, "sample");

    // browser.getTitle().then(function(title) {
    //   assert.strictEqual(
    //     title,
    //     "WebdriverIO · Next-gen WebDriver test framework for Node.js"
    //   );
    // });
  });
});
