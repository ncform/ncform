import assert from "assert";
import Minimum from "../../src/rules/minimum.js";

describe("/src/rules/minimum.js", () => {
  it("输入 6,5, 返回 true", async () => {
    const validation = new Minimum().validateLogic(6, 5);
    assert(validation === true);
  });

  it("输入 5,5, 返回 true", async () => {
    const validation = new Minimum().validateLogic(5, 5);
    assert(validation === true);
  });

  it("输入 5,6, 返回 false", async () => {
    const validation = new Minimum().validateLogic(5, 6);
    assert(validation === false);
  });

  it("验证规则为空, 返回 true", async () => {
    const validation = new Minimum().validateLogic(5);
    assert(validation === true);
  });
});
