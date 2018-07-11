import assert from "assert";
import MultipleOf from "../../src/rules/multipleOf.js";

describe("/src/rules/multipleOf.js", () => {
  it("10是5的倍数", async () => {
    const validation = new MultipleOf().validateLogic(10, 5);
    assert(validation === true);
  });

  it("10不是3的倍数", async () => {
    const validation = new MultipleOf().validateLogic(10, 3);
    assert(validation === false);
  });

  it("10不是0的倍数", async () => {
    const validation = new MultipleOf().validateLogic(10, 0);
    assert(validation === false);
  });

  it("0是10的倍数", async () => {
    const validation = new MultipleOf().validateLogic(0, 10);
    assert(validation === true);
  });
});
