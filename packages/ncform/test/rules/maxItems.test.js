import assert from "assert";
import MaxItems from "../../src/rules/maxItems.js";

describe("/src/rules/maxItems.js", () => {
  it("输入 [1, 2, 3, 4, 5], 5，return true", async () => {
    const validation = new MaxItems().validateLogic([1, 2, 3, 4, 5], 5);
    assert(validation === true);
  });

  it("输入 [1, 2, 3, 4, 5], 6，return true", async () => {
    const validation = new MaxItems().validateLogic([1, 2, 3, 4, 5], 6);
    assert(validation === true);
  });

  it("输入 [1, 2, 3, 4, 5], 4，return false", async () => {
    const validation = new MaxItems().validateLogic([1, 2, 3, 4, 5], 4);
    assert(validation === false);
  });
});
