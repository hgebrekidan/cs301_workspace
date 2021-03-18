
// Qn no. 1
function divisibleSumPairs( array,num){
    count=0;
    for (let i=0; i<array.length; i++){
        for (let j=i+1; j<array.length; j++){
            if (i<j && (array[i]+array[j])%num===0);
            count++
        }
        return count
    }
}
 
console.log(divisibleSumPairs([1,3,2,1,6],2));

// Qn no. 2
function mostRepeatedElement(array) {
    let prevRep = 0;
    let repeated = 0;
    let item;

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) repeated++;
            if (repeated > prevRep) {
                prevRep = repeated;
                item = array[i];
            }
        }

        repeated = 0;
    }

    return item;
}
console.log("Most repeated element: "+mostRepeatedElement([1, 2, 3, 2, 2, 2, 1, 4, 5, 1, 2, 3, 1]));
// Qn no.3 
function countSocksPairs(arr)
 
for(let i=0; i< arr.length; i++){
    for (let j= i+1; j<arr.length){
        if (arr[i]===arr[j]){
            count=1;
            count++
            break;
        }
    }
}
console.log(countSocksPairs([10,2,3,4,5,10,4]))
//Qn no.5

function computeCharges(arr) {
    let result =[];
    for (const element of arr) {
        let customer = {
            customerId: element.custId,
            average: getAverage(element.charges),
            maximum: getMax(element.charges)
        };
      result.push(customer);
    }
    return result;
}
 
let getAverage = (arr) =>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};
 
let getMax = (arr) =>{
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}
// Qn no. 6

function findClosestMin(arr, n) { 
    let min =arr[0]; 
   // find the min element in the array 
    for (let i = 0; i < arr.length; i++) { 
    if (arr[i] < min) { 
    min = arr[i]; 
    } 
    } 
   // store indexes of occurrences 
    // of minimum element in the array 
    for (let i = 0; i < arr.length; i++) { 
    if (arr[i] === min) { 
    arr.push[i]; 
    } 
    } 
    
    // if minimum element doesnot occurs return -1. 
    if (arr.length < 2) { 
    return -1; 
    } 
    
    let min_dist;
    // to calculate minimum difference between 
    // any two consecutive indexes 
    for (let i = 1; i < arr.length; i++) { 
    if ((arr[i] - arr[i - 1]) < min_dist) { 
    min_dist = (arr[i] - arr[i - 1]); 
    } 
    } 
    
    return min_dist; 
   } 
   console.log(findClosestMin[3,2,1,2,3])