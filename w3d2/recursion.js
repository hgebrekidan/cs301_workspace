"use strict";
// Question number 1
/**
 * 
 * @param {number} base base 
 * @param {number} power power
 * @return {number} result of base multiplies power times itself
 */
function powerOfAnyBase(base,power){
    if(power===0){
        return 1;
    }else{
        if(power>0){
            return base*powerOfAnyBase(base,power-1);
        }
        return ((1/base*powerOfAnyBase(base,power+1)));
    }
    
}
console.log(powerOfAnyBase(2,-3));

// Question number 2
// count digit using recursively
/**
 * 
 * @param {number} num digit to be conuted 
 * @return {number} number of counts of digit
 */
function recursiveDigitCount(num){
    //let quotient=;
    num=Math.abs(num);
    if(num<1){
        return 0;
    }
    return 1+recursiveDigitCount(Math.floor(num/10));
}
console.log(recursiveDigitCount(12345));
// Quesion number 3
// reversing String recursively
/**
 * 
 * @param {String} str String to be reversed
 * @return {String} reversed String 
 */
function reverseString(str){
    if(str===""){
        return "";
    }
     let chopped=str.charAt(str.length-1)+reverseString(str.substring(0,str.length-1));
    return chopped;
}
console.log(reverseString("Hailemariam"));

