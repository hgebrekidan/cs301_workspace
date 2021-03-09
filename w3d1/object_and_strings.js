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
 * @param {*} obj 
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
 * @param {*} str 
 */
function checkSpam(str){
    for(let prop in str){
        if(str[prop]==="lottery"||str[prop]==="prize"){
            return true;
        }
    }
    return false;
}

console.log(checkSpam(string={reward1:"lottery",reward2:"prize",reward3:"filthy"}));


// Question number 4
/**
 * 
 * @param {*} obj1 
 * @param {*} obj2 
 */
function suffix(obj1,obj2){
    if(obj1[prop].charAt(obj1[prop].length-1-i)===obj2[prop].charAt(obj2[prop].length-1-i)){

    }
}
