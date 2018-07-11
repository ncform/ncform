import assert from "assert";
import MinItems from "../../src/rules/minItems.js";

describe("/src/rules/minItems.js", () => {
  it("输入 [1, 2, 3, 4, 5], 5，return true", async () => {
    const validation = new MinItems().validateLogic([1, 2, 3, 4, 5], 5);
    assert(validation === true);
  });

  it("输入 [1, 2, 3, 4, 5], 6，return false", async () => {
    const validation = new MinItems().validateLogic([1, 2, 3, 4, 5], 6);
    assert(validation === false);
  });

  it("输入 [1, 2, 3, 4, 5], 4，return true", async () => {
    const validation = new MinItems().validateLogic([1, 2, 3, 4, 5], 4);
    assert(validation === true);
  });
});
