"use strict";

const arrays = require("./array.js");
const assert = require("assert");

describe("isArrayEqual", function () {
    it("test with equal array", function () {
        assert.strictEqual(arrays.isEqual([1, 2, 3], [1, 2, 3]), true);
    });

    it("test with arrays that are not equal", function () {
        assert.strictEqual(arrays.isEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]), false);
    });

});