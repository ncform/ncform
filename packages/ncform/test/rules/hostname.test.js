import assert from "assert";
import Hostname from "../../src/rules/hostname.js";

describe("/src/rules/hostname.js", () => {
  it("https://dx.com/ 是hostname", async () => {
    const validation = new Hostname().validateLogic("https://dx.com/", true);
    assert(validation === true);
  });

  it("http://www.dx.com/ 是hostname", async () => {
    const validation = new Hostname().validateLogic("http://dx.com/", true);
    assert(validation === true);
  });

  it("httpxxx://dx.com/ 不是hostname", async () => {
    const validation = new Hostname().validateLogic("httpxxx://dx.com/", true);
    assert(validation === false);
  });
});
