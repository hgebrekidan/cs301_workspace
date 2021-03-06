"use strict";
// Question number 1
// checks whether two arrays are equal or not
/**
 * 
 * @param {number} array1 first array to be checked
 * @param {number} array2 second array to be checked
 * @return {boolean} true if equal false if not
 */
function isEqual(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
        if (array1.shift() !== array2.shift()) {
            return false;
        }
    }
    return true;
}
//console.log(isEqual([1,2,3,4,5],[1,2,8,4,5]));

// Question number 2
// sums last and first elements of an array
/**
 * 
 * @param {number} array given array
 * @return {number} sum  
 */
function addFirstAndEnd(array) {

    return array.shift() + array.pop();
}
console.log(addFirstAndEnd([1, 2, 3, 4, 5, 6, 7]));

// Question number 3
// find the middle value of the array if even length get 
//the average of the middle values
/**
 * 
 * @param {number} array given array
 * @return {number} value at the middle 
 */
function getMiddle(array) {
    if (array.length % 2 !== 0) {
        return array[Math.floor(array.length / 2)];
    }
    let middleAvg = ((array[array.length / 2 - 1]) + (array[array.length / 2])) / 2;
    return middleAvg;
}
console.log(getMiddle([1, 2, 3, 4, 5, 6]));

// Question number 4
// rotate elements to the left by 1
/**
 * 
 * @param {number} array array to be rotated
 * @return {number} one time left rotated array
 */
function rotateToLeftByOne(array) {
    let firstElement = array.shift(array[0]);
    array.push(firstElement);
    return array;
}
console.log(rotateToLeftByOne([1, 2, 3, 4, 5]));
// Question number 5
// rotate elements to the right by 1
/**
 * 
 * @param {number} array array to be rotated
 * @return {number} one time right rotated array 
 */
function rotateToRightByOne(array) {
    let lastElement = array.pop();
    array.unshift(lastElement);
    return array;
}
console.log(rotateToRightByOne([1, 2, 3, 4, 5]));
// Question number 6
// rotate elements to the right by n times
/**
 * 
 * @param {number} array array to be rotated
 * @param {number} num number of rotation
 * @return {number} n times right totated array
 */
function rotateRightByNTimes(array, num) {
    let lastElement = 0;
    for (let i = 0; i < num; i++) {
        lastElement = array.pop();
        array.unshift(lastElement);
    }
    return array;
}
console.log(rotateRightByNTimes([1, 2, 3, 4, 5], 2));

// Question number 10
// searches for a number in an array and returns 
/**
 * 
 * @param {number} array array to be searched
 * @param {number} num searched number
 * @return {array} num exists or not, first and last index of num
 */ 
function enhanced(array, num) {

    let lastIdxOfNum;
    let firstIdxOfNum;
    let isFound = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== num) {
            !isFound;
            lastIdxOfNum = -1;
            firstIdxOfNum = -1;
        }
        isFound;
        lastIdxOfNum = array.lastIndexOf(num);
        firstIdxOfNum = array.indexOf(num);

    }
    let completedArray = [];
    completedArray.push(isFound, firstIdxOfNum, lastIdxOfNum);
    return completedArray;
}
console.log(enhanced([4, 1, 2, 4, 4, 2, 4, 3, 6], 4));


// Question number 12
// reversing an array
/**
 * 
 * @param {number} array an array to be reversed
 * @return {number}  an array of reversed numbers
 */
function reversedArray(array) {

    let reversedNumbers = [];

    for (let i = array.length - 1; i >= 0; i--) {
        let copy = array.slice();
        reversedNumbers.push(copy[i]);
    }
    return reversedNumbers;
}
console.log(reversedArray([1, 2, 3, 4, 5]));
// Question number 13 
// search for numbers >=a and <=b  in an array
/**
 * 
 * @param {number} array array to be checked
 * @param {number} num1 first value to be searched
 * @param {number} num2 second value to be searched
 * @return {number} array of number greater than num1 and less than num2
 */
function filterRange(array, num1, num2) {
    let value;
    let arrayOfValues = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= num1 || array[i] <= num2) {
            value = array[i];
            arrayOfValues.push(value);
        }
    }

    return arrayOfValues;
}
console.log(filterRange([1, 2, 3, 4, 5, 9, 7, 10], 7, 2));

module.exports = { isEqual, addFirstAndEnd, getMiddle, rotateToLeftByOne, rotateToRightByOne, rotateRightByNTimes };
