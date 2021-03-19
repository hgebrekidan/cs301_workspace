/*eslint-disable*/
//1. Find porcupine number i.e a prime number that has last digit of 9
// and the next prime number that follows also has last digit of 9.

function nextPorcupineNum(num){
    let firstPrime=num+1;
    while(true){
        if(isPrime(firstPrime)&&firstPrime%10===9){
            let nextPrime=firstPrime+1;
            while(true){
                if(isPrime(nextPrime)){
                    if(nextPrime%10===9){
                        return firstPrime;
                    }else{
                        firstPrime=nextPrime;
                        break;
                    }
                }
                nextPrime++;
            }
        }
        firstPrime++;
    }
}
function isPrime(num) {
    if (num === 0 || num === 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(nextPorcupineNum(139));
//2. Given an array of integers nums and an integer target, return 
// indices of the two numbers such that they add up to target. 

function sumIndicesOfTarget(array, target) {
    let indicesArray = [];
    for (let i = 0; i < array.length; i++) {
        let indiceArray = [];
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                indiceArray.push(i,j);
               // indiceArray.push(j);
            }
            continue;
        }
        indicesArray.push(indiceArray);
    }
    return indicesArray;
}

console.log(sumIndicesOfTarget([1, 7, 3, 4, 5, 6, 7, 8, 9, 10], 10));


//3. Write a function named mostFrequent() that given an array, 
// finds the most frequent element in it. If there are multiple 
//  elements that appear maximum number of times, returns any one
//  of them.

function mostFrequent(array) {
    let prevRepeated = 0;
    let repeated = 0;
    let value;
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) repeated++;
            if (repeated > prevRepeated) {
                prevRepeated = repeated;
                value = array[i];
            }
        }
        repeated = 0;
    }
    return value;
}

console.log("Most Frequent Element: " + mostFrequent([1, 2, 3, 5, 2, 1, 2, 5, 1, 2]));

//4. Given an array of integers, write a function that 
// finds the pair in array whose sum is closest to 0. 
// If there are more than one pair, return any pair.

function closestToZero(array) {
    let greaterThanZero = [];
    let Minsum = Math.abs(array[0] + array[1]);
    let min1 = array[0];
    let min2 = array[1];
    //let maxSum = array[0] + array[1];
    for (let i = 0; i < array.length; i++) {
        let pairs = [];
        for (let j = i + 1; j < array.length; j++) {
            if (Math.abs(array[i] + array[j]) <= Minsum) {
                Minsum = Math.abs(array[i] + array[j]);
                min1 = array[i];
                min2 = array[j];
                // pairs[pairs.length]=min1;
                // pairs[pairs.length]=min2;
            }

        }

    }
    greaterThanZero[greaterThanZero.length] = min1;
    greaterThanZero[greaterThanZero.length] = min2;

    return greaterThanZero;
}



console.log("Closest to zero: "+closestToZero([1, -10, 2, 4, -4, 6, -6, 10]));

//5. Write a function, that given two arrays representing 
// two non-negative integers with digits, adds 
// the two numbers, and return it as an array.
function arraySum(array1, array2) {
    let sumArray2 = 0;
    let sumArray1 = 0;
    for (let i = 0; i < array2.length; i++) {
        sumArray2 += (array2[array2.length - 1 - i]) * Math.pow(10, i);
    }
    for (let i = 0; i < array1.length; i++) {
        sumArray1 += (array1[array1.length - 1 - i]) * Math.pow(10, i);
    }
    let sum = sumArray2 + sumArray1;
    let reversedNum = 0;
    let reversedNumArray = [];
    while (sum > 0) {
        reversedNumArray[reversedNumArray.length] = sum % 10;
        sum = Math.floor(sum / 10);
    }
    return reversedNumArray;
}

console.log(arraySum([3, 4, 2], [4, 6, 5]));

//6. Given two binary strings, return their sum (also a binary string).
// The input strings are both non-empty and contains only characters 1 and 0.
function binaryToNumber(strNum1, strNum2) {
    let number1 = 0;
    let number2 = 0;
    for (let i = 0; i < strNum1.length; i++) {
        number1 += Number(strNum1[strNum1.length - 1 - i]) * Math.pow(2, i);
    }
    for (let i = 0; i < strNum2.length; i++) {
        number2 += Number(strNum2[strNum2.length - 1 - i]) * Math.pow(2, i);
    }
    let sum = number1 + number2;
    let rem = [];
    while (sum > 0) {
        rem[rem.length] = sum % 2;
        sum = Math.floor(sum / 2);
    }
    return rem;
}
console.log(binaryToNumber("1010", "1011"));

//7. Given a positive integer, return its corresponding column title as appear 
// in an Excel Sheet.For example:   1 →A, 2→B, 3→C,…,26→z,27→AB, →28->AB, 


function columnTitle(num) {
    //if(num<65||num>122||num<97&&num>90) return "Not a character";
    let title = "";
    if (Math.floor(num / 26) === 0) {
        title = String.fromCharCode(64 + num + Math.floor(num / 26));
    } if (Math.floor(num / 26) > 0) {
        title = title + String.fromCharCode(65) + String.fromCharCode(65 + Math.floor(num / 26));
    }
    return title;
}
console.log(columnTitle(68));
function columnTitleRec(num) {
    let num1 = num;
    if (num1 <= 0) return "";
    num1 = num - 26;
    return String.fromCharCode(64 + num) + String.fromCharCode(65 + (num1));
}
console.log(columnTitleRec(12));

//8. Given a column title as appear in an excel sheet, return its corresponding column number.




//9. A strobogrammatic number is a number that looks the same when rotated 180 degree (looked 
// upside down) Write a function to determine if a number is strobogrammatic. The number is 
// represented as string.



//10. Given an array containing n distinct numbers taken from 0,1,2,…,n, find the one that is 
// missing from the array.




//11. Given a sorted array and a target value, return the index if the target is found. If not,
//  return the index where it would be if it were inserted in order.You may assume no duplicates 
// in the array.

function indexOfTarget(array, target) {
    let targetIndex = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            targetIndex = i;
            break;
        } else if (array[i] > target) {
            targetIndex = i;

            break;
        }
        else if (array[i] < target) {
            targetIndex = array.length;

        }
    }
    return targetIndex;
}

console.log(indexOfTarget([1, 2, 3, 4, 6], 5));

//14. Given a list of words and two words word1 and word2, return the 
// shortest distance between these two words in the list. 
 function shortestDistance(str,word1,word2){
     str=str.split(" ");
     if(!str.includes(word1)||!str.includes(word2)) return -1;
     let word1Idx=0;
     let word2Idx=0;
     for(let i=0;i<str.length;i++){
         if(str[i]===word1){
             word1Idx=i;
         }if(str[i]===word2){
             word2Idx=i;
         }
     }
     let distance=Math.abs(word2Idx-word1Idx);
         return distance;
 }
 console.log(shortestDistance("hello this is our last assignment","hell","assignment"));


 //15. Given an array nums, write a function to move all 0's to the end of it while 
 // maintaining the relative order of the non-zero elements.

 function moveZeroes(array){
     let count=0;
     let orderedArray=[];
     for(let i=0;i<array.length;i++){
        
         if(array[i]!==0){
             count++;
            orderedArray.push(array[i]);
         }
         
        }
    
     for(let i=0;i<array.length-count;i++){
         orderedArray[orderedArray.length]=0;
     }
     return orderedArray;
 }
 console.log(moveZeroes([0,2,0,6,0,5,0]));

//16. Write a function that takes a string as input and reverse 
// only the vowels of a string.
function reverseVowelsOnly(str) {
    str = str.split("");
    let revStr = [];
    let vowels = [];
    for (let i = 0; i < str.length; i++) {                             
        if (isVowel(str[i])) {
            vowels[vowels.length]=(str[i]);
        } else if (!isVowel(str[i])) {
            revStr[i] = (str[i]);
        }
    }
    let j = 0;
    for (let i = 0; i < str.length; i++) {
        if (revStr[i] === undefined) {
            revStr[i] = vowels[vowels.length - 1 - j];
            j++;
        }
    }
    revStr = revStr.join("");
    return revStr;
    
}
console.log(reverseVowelsOnly("leetcode"));


function isVowel(str) {
    if (str === "A" || str === "E" || str === "I" || str === "O" || str === "U" ||
        str === "a" || str === "e" || str === "i" || str === "o" || str === "u") {
        return true;
    }
    return false;
}

