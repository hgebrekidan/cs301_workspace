"use strict";



const assert = require("assert");
const lcm = require("./lcm.js");


describe("LCM", function () {
    it("24 is LCM", function () {
        assert.strictEqual(lcm.LCM(6, 8), 24);
    });

});

