import assert from "assert";
import Ipv4 from "../../src/rules/ipv4.js";

describe("/src/rules/ipv4.js", () => {
  it("192.168.1.2 是ipv4地址", async () => {
    const validation = new Ipv4().validateLogic("192.168.1.2", true);
    assert(validation === true);
  });

  it("192.168.1 不是ipv4地址", async () => {
    const validation = new Ipv4().validateLogic("192.168.1", true);
    assert(validation === false);
  });
});
