import assert from "assert";
import Contains from "../../src/rules/contains.js";

describe("/src/rules/contains.js", () => {
  it('输入 ["some","thing"], some, 返回 true', async () => {
    const validation = new Contains().validateLogic(["some", "thing"], "some");
    assert(validation === true);
  });

  it('输入 ["some","thing"], some2, 返回 false', async () => {
    const validation = new Contains().validateLogic(["some", "thing"], "some2");
    assert(validation === false);
  });
});
