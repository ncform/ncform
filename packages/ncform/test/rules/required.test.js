import assert from "assert";
import Required from "../../src/rules/required.js";

describe("/src/rules/required.js", () => {
  it("输入0，返回 true", async () => {
    const validation = new Required().validateLogic(0, true);
    assert(validation === true);
  });

  it("输入正常字符串，返回 true", async () => {
    const validation = new Required().validateLogic("aa", true);
    assert(validation === true);
  });

  it("输入空数组，返回 false", async () => {
    const validation = new Required().validateLogic([], true);
    assert(validation === false);
  });

  it("输入undefined，返回 false", async () => {
    const validation = new Required().validateLogic(undefined, true);
    assert(validation === false);
  });

  it("输入空字符串，返回 false", async () => {
    const validation = new Required().validateLogic("", true);
    assert(validation === false);
  });

  it("输入NaN，返回 false", async () => {
    const validation = new Required().validateLogic(NaN, true);
    assert(validation === false);
  });
});
