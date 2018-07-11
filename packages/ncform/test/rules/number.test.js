import assert from "assert";
import Number from "../../src/rules/number.js";

describe("/src/rules/number.js", () => {
  it("无输入，返回false", async () => {
    const validation = new Number().validateLogic(undefined, true);
    assert(validation === false);
  });

  it("输入非数字字符串，返回false", async () => {
    const validation = new Number().validateLogic("something", true);
    assert(validation === false);
  });

  it("输入正整数，返回true", async () => {
    const validation = new Number().validateLogic(123, true);
    assert(validation === true);
  });

  it("输入负整数，返回true", async () => {
    const validation = new Number().validateLogic(-123, true);
    assert(validation === true);
  });

  it("输入小数，返回true", async () => {
    const validation = new Number().validateLogic(123.45, true);
    assert(validation === true);
  });

  it("输入整数字符串，返回true", async () => {
    const validation = new Number().validateLogic("123", true);
    assert(validation === true);
  });

  it("输入小数字符串，返回true", async () => {
    const validation = new Number().validateLogic("0.123", true);
    assert(validation === true);
  });

  it("输入负数字符串，返回true", async () => {
    const validation = new Number().validateLogic("-123", true);
    assert(validation === true);
  });
});
