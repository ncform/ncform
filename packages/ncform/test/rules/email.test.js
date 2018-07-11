import assert from "assert";
import Email from "../../src/rules/email.js";

describe("/src/rules/email.js", () => {
  it("输入 kyle.lo@dx.com, 返回 true", async () => {
    const validation = new Email().validateLogic("kyle.lo@dx.com", true);
    assert(validation === true);
  });

  it("输入 Hello@dx.com, 返回 true", async () => {
    const validation = new Email().validateLogic("hello@dx.com", true);
    assert(validation === true);
  });

  it("输入 helloworld, 返回 false", async () => {
    const validation = new Email().validateLogic("helloworld", true);
    assert(validation === false);
  });
});
