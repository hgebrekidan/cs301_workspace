"use strict";
// Question number 1
// a.
let car = {};
// b
car.make="Toyota";
// c
car.model= "Camry";
// d
console.log(car); // object is re-assigned
// e
car.model="Rav4";
// f
console.log(car);
// g
console.log(car.make);
delete car.make;
// h 
console.log(car);

// Question number 2
// count number of properties of an object
/**
 * 
 * @param {object} obj object to be checked
 * @return {number} number of counts properties
 */
function countProperties(obj){
    let count=0;
    for (let prop in obj) {
        if(obj[prop]===true){
            count++;
        }
        
        }
        return count; 
}
console.log(countProperties(movies={city:"pradiator",baby:"infant",}));
// Question number 3
// 
/**
 * 
 * @param {String} str String to be checked
 * @return {boolean} true if "lottery" or "prize" exists
 */
function checkSpam(str){
    
        if(str.includes("lottery")||str.includes("prize")){
            return true;
        }
    
    return false;
}

console.log(checkSpam("The bingo lottery was not included."));


// Question number 4
/**
 * 
 * @param {String} str1 first String to be checked
 * @param {String} str2 second String to be checked
 * @return {String} common suffix of Strings
 */
function suffix(str1,str2){
    let suf="";
    for(let i=0;i<str1.length;i++){
    if(str1.charAt(str1.length-1-i)===str2.charAt(str2.length-1-i)){
    suf=suf+str1.charAt(str1.length-1-i);
    }
    }
    let suf1="";
    for(let i=suf.length;i>=0;i--){
        suf1+=suf.charAt(i);
    }
    return suf1;
}
console.log(suffix("glowing","blowing"));

// Question number 5
/**
 * @param {String} str String to be checked
 * @return {String} String starting with capital letter
 */ 
function firstLetterCapital(str){
    // let firstCapital=str.substring(0,1);
    // firstCapital=firstCapital.toUpperCase();
    let firstCapital=str.charAt(0).toUpperCase();
    let rest=str.substring(1,str.length);
    return firstCapital+rest;
}
console.log(firstLetterCapital("america"));
// Question number 6
/**
 * 
 * @param {number} num1 first number to be swapped
 * @param {number} num2 second number to be swaped
 * @return {number}  swapped numbers
 */
function swap(num1,num2){
    let temp=num1;
    num1=num2;
    num2=temp;
    
    return num1+" "+num2;
}
console.log(swap(8,9));
// Question number 7
/**
 * 
 * @param {object} array array of objects
 * @return {number} average age
 */
function avgAge(array){
    let sum=0;
    for (let i=0;i<array.length;i++){
        sum+=array[i].age;
    } 
    let avg=sum/array.length
    return avg;
}
console.log(avgAge([bob={nme:"b",age:24},tom={name:"t",age:20}]));
