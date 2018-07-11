import assert from "assert";
import Pattern from "../../src/rules/pattern.js";

describe("/src/rules/pattern.js", () => {
  it("输入 hello, /d/ 返回 false", async () => {
    const validation = new Pattern().validateLogic("hello", /\d/);
    assert(validation === false);
  });

  it("输入 1hexxllo2, /^1S*2$/ 返回 true", async () => {
    const validation = new Pattern().validateLogic("1hello2", /^1\S*2$/);
    assert(validation === true);
  });
});
