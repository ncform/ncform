import assert from "assert";
import DateTime from "../../src/rules/dateTime.js";

describe("/src/rules/dateTime.js", () => {
  it("输入时间戳, 返回true", async () => {
    const validation = new DateTime().validateLogic(
      `${new Date().getTime()}`,
      true
    );
    assert(validation === true);
  });

  it("输入非时间戳‘xxxxxx’, 返回false", async () => {
    const validation = new DateTime().validateLogic("xxxxxx", true);
    assert(validation === false);
  });

  it("验证规则为false，返回true", async () => {
    const validation = new DateTime().validateLogic("asdasdsadsd", false);
    assert(validation === true);
  });
});
