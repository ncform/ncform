import assert from "assert";
import Maximum from "../../src/rules/maximum.js";

describe("/src/rules/maximum.js", () => {
  it("输入 6,5, 返回 false", async () => {
    const validation = new Maximum().validateLogic(6, 5);
    assert(validation === false);
  });

  it("输入 5,5, 返回 true", async () => {
    const validation = new Maximum().validateLogic(5, 5);
    assert(validation === true);
  });

  it("输入 5,6, 返回 true", async () => {
    const validation = new Maximum().validateLogic(5, 6);
    assert(validation === true);
  });

  it("验证规则为空, 返回 true", async () => {
    const validation = new Maximum().validateLogic(5);
    assert(validation === true);
  });
});
