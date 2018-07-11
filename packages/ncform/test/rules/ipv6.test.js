import assert from "assert";
import Ipv6 from "../../src/rules/ipv6.js";

describe("/src/rules/ipv6.js", () => {
  it("1050:0000:0000:0000:0005:0600:300c:326b 是ipv6地址", async () => {
    const validation = new Ipv6().validateLogic(
      "1050:0000:0000:0000:0005:0600:300c:326b",
      true
    );
    assert(validation === true);
  });

  it("1050:0000:0000:0000:0005:0600:300c 不是ipv6地址", async () => {
    const validation = new Ipv6().validateLogic(
      "1050:0000:0000:0000:0005:0600:300c",
      true
    );
    assert(validation === false);
  });
});
