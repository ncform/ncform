import assert from "assert";
import MaxProperties from "../../src/rules/maxProperties.js";

describe("/src/rules/maxProperties.js", () => {
  it("{a:1,b:2}，1, return false", async () => {
    const validation = new MaxProperties().validateLogic({ a: 1, b: 2 }, 1);
    assert(validation === false);
  });

  it("{a:1,b:2}，2, return true", async () => {
    const validation = new MaxProperties().validateLogic({ a: 1, b: 2 }, 2);
    assert(validation === true);
  });

  it("{a:1,b:2}，3, return true", async () => {
    const validation = new MaxProperties().validateLogic({ a: 1, b: 2 }, 3);
    assert(validation === true);
  });
});
