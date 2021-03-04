"use strict";
/**
 * 
 * @param {number} result back function to be inserted the computation
 * @param {number} num1 a number to be inserted  the computation
 * @param {number} num2 a number to be inserted  the computation
 * @return {number} sum of the the numbers 
 */
let addArrow= (result)=> {
    return (`Result of the computation is ${result}`);
    };
    let computeArrow=function (addArrow,num1,num2){
        let sum=num1+num2;
        addArrow(sum);
    };
computeArrow(addArrow,5,5);
module.exports= {computeArrow,addArrow};