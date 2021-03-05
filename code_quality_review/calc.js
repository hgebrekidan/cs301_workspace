"use strict";
/**
 * 
 * @param {number} op1 first number to be added
 * @param {number} op2 second number to be added
 * @return {number} sum of the two numbers
 */
function add(op1, op2) {
    return op1 + op2;
}

/**
 * 
 * @param {number} op1 first operand
 * @param {number} op2 second operand
 * @return {number} subtraction result
 */
function sub(op1, op2) {
    return op1 - op2;
}
/**
 * 
 * @param {number} op1 numerator
 * @param {number} op2 denominator
 * @return {number} division result
 */
function div(op1, op2) {
    if (op2 === 0) return NaN;
    return op1 / op2;
}
module.exports = { add, sub, div };