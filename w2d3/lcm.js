"use strict";
// Question number 5
// HCF of two numbers
let prompt = require("prompt-sync")();
let firstNumber = prompt("Enter the first number : ");
let secondNumber = prompt("Enter the second number : ");
/**
 * 
 * @param {number} num1 first number to be tested for highest common factor
 * @param {number} num2 second number to be tested for highest common factor
 * @return{number} highest common factor
 */
let HCF = function (num1, num2) {
    let higestCommonFactor;
    for (let i = 1; i < num1 && i < num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            higestCommonFactor = i;
            (higestCommonFactor);
        }
    }
    return higestCommonFactor;
};

console.log(`${HCF(firstNumber, secondNumber)} is the HCF of  ${firstNumber} and ${secondNumber}`);
// Question number 6
// LCM of two numbers
/**
 * 
 * @param {number} num1 first number to be tested for lowest common multiple
 * @param {number} num2 second number to be tested for lowest common multiple
 * @return{number} lowest common multiple
 */
 let LCM = function (num1, num2) {
    let lcm = (num1 * num2) / HCF(num1, num2);
    return lcm;
};
console.log(`${LCM(firstNumber, secondNumber)} is the LCM of ${firstNumber} and ${secondNumber}`);
module.exports= {HCF,LCM};