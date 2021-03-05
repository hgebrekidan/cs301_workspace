"use strict";
const assert = require("assert");
// name of the file should match
const calc = require("./calc.js");

describe("add", function () {

    it("5 plus 5 is 10", function () {
        assert.strictEqual(calc.add(5, 5), 10);
    });
    it("1 plus 0 is 1", function () {
        assert.strictEqual(calc.add(1,0), 1);
    });

    it("1 plus -1 is 0 ", function () {
        assert.strictEqual(calc.add(1, -1), 0);
    });
});

// write test description for sub 

describe("sub", function () {

    it("5 minus 2 is 3", function () {
        assert.strictEqual(calc.sub(5, 2), 3);
    });
    it("1 minus 0 is 1", function () {
        assert.strictEqual(calc.sub(1,0), 1);
    });

    it("1 minus -1 is 2 ", function () {
        assert.strictEqual(calc.sub(1, -1), 2);
    });
});

// write test description for div
describe("divide", function () {

    it("5 over 5 is 1", function () {
        assert.strictEqual(calc.div(5, 5), 1);
    });
    it("8 over -2 is -4", function () {
        assert.strictEqual(calc.div(8,-2), -4);
    });

    it("1 over 5 is 0.2 ", function () {
        assert.strictEqual(calc.div(1, 5), 0.2);
    });

    it("4 over 0 is NaN ", function () {
        assert.strictEqual(calc.div(4, 0), NaN);
    });
});


