import assert from "assert";
import MinLength from "../../src/rules/minLength.js";

describe("/src/rules/minLength.js", () => {
  it("输入 123456789,8, 返回 true", async () => {
    const validation = new MinLength().validateLogic("123456789", 8);
    assert(validation === true);
  });

  it("输入 1234567,8, 返回 false", async () => {
    const validation = new MinLength().validateLogic("1234567", 8);
    assert(validation === false);
  });

  it("输入 rule为空, 返回 true", async () => {
    const validation = new MinLength().validateLogic("12345678");
    assert(validation === true);
  });
});
