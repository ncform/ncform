import assert from "assert";
import UniqueItems from "../../src/rules/uniqueItems.js";

describe("/src/rules/uniqueItems.js", () => {
  it("[1,2,1] item不是唯一的。", async () => {
    const validation = new UniqueItems().validateLogic([1, 2, 1], true);
    assert(validation === false);
  });

  it("[1,2,3] item是唯一的。", async () => {
    const validation = new UniqueItems().validateLogic([1, 2, 3], true);
    assert(validation === true);
  });
});
