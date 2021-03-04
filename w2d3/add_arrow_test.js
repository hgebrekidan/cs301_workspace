"use strict";



const assert = require("assert");
const addArrow = require("./addArr.js");


describe("computeArrow", function () {
    it("10 is sum", function () {
        assert.strictEqual(addArrow.computeArrow(addArrow,5,5 ));
    });

});
