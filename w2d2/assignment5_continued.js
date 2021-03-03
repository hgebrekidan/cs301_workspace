"use strict";
// Question number 5
// HCF of two numbers
let prompt = require("prompt-sync")();
let firstNumber = prompt("Enter the first number : ");
let secondNumber = prompt("Enter the second number : ");
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
let LCM = function (num1, num2) {
    let lcm = (num1 * num2) / HCF(num1, num2);
    return lcm;
};
console.log(`${LCM(firstNumber, secondNumber)} is the LCM of ${firstNumber} and ${secondNumber}`);
// Question number 7
// Function expression
let add=function (result) {
    return (`Result of the computation is ${result}`);
    }
    
let compute=function (add,num1,num2){
    let sum=num1+num2;
    add(sum);
    
}
compute(add,5,5);
// Anonymous function

// Arrow function
let add= (result)=> {
    return (`Result of the computation is ${result}`);
    }
    let compute=function (add,num1,num2){
        let sum=num1+num2;
        add(sum);
    }
