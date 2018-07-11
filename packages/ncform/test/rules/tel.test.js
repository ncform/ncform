import assert from "assert";
import Tel from "../../src/rules/tel.js";

describe("/src/rules/tel.js", () => {
  it("15912341234 是手机号", async () => {
    const validation = new Tel().validateLogic("15912341234", true);
    assert(validation === true);
  });

  it("17812341234 是手机号", async () => {
    const validation = new Tel().validateLogic("17812341234", true);
    assert(validation === true);
  });

  it("159123 不是手机号", async () => {
    const validation = new Tel().validateLogic("159123", true);
    assert(validation === false);
  });
});
