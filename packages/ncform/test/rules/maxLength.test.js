import assert from "assert";
import MaxLength from "../../src/rules/maxLength.js";

describe("/src/rules/maxLength.js", () => {
  it("输入 123456789,8, 返回 false", async () => {
    const validation = new MaxLength().validateLogic("123456789", 8);
    assert(validation === false);
  });

  it("输入 12345678,8, 返回 true", async () => {
    const validation = new MaxLength().validateLogic("12345678", 8);
    assert(validation === true);
  });

  it("输入rule为空, 返回 true", async () => {
    const validation = new MaxLength().validateLogic("12345678");
    assert(validation === true);
  });
});
