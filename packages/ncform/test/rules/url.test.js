import assert from "assert";
import Url from "../../src/rules/url.js";

describe("/src/rules/url.js", () => {
  it("输入 http://dx.com/, 返回 true", async () => {
    const validation = new Url().validateLogic("http://dx.com/");
    assert(validation === true);
  });

  it("输入 https://www.dx.com/index.php, 返回 true", async () => {
    const validation = new Url().validateLogic("https://www.dx.com/index.php");
    assert(validation === true);
  });
});
