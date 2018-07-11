import assert from "assert";
import MinProperties from "../../src/rules/minProperties.js";

describe("/src/rules/minProperties.js", () => {
  it("{a:1,b:2}，1, return true", async () => {
    const validation = new MinProperties().validateLogic({ a: 1, b: 2 }, 1);
    assert(validation === true);
  });

  it("{a:1,b:2}，2, return true", async () => {
    const validation = new MinProperties().validateLogic({ a: 1, b: 2 }, 2);
    assert(validation === true);
  });

  it("{a:1,b:2}，3, return false", async () => {
    const validation = new MinProperties().validateLogic({ a: 1, b: 2 }, 3);
    assert(validation === false);
  });
});
