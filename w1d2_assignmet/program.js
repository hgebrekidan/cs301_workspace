/*eslint-disable*/
//Question number 1

let prompt=require('prompt-sync')();

let volumeInQuart=prompt("input the volume in Quart");
let volumeInLitre=0.94635295*volumeInQuart;
console.log(volumeInLitre);
//Question number 2

let distanceInKM=prompt("input the distance in killometers");
let distanceInMiles=0.62137119*distanceInKM;
console.log(distanceInMiles);
//Question number 3

let totalNumberOfStacks=prompt("Enter total number of stacks");
let numberOfBoxesInEachStack=prompt("Enter number of boxes in each stack");
let numberOfStacks=totalNumberOfStacks/numberOfBoxesInEachStack;
if(totalNumberOfStacks%numberOfBoxesInEachStack==0){
    console.log(numberOfStacks);
}else{
    console.log(Math.floor(numberOfStacks)+1);
}
//Question number 4

let startMilage=prompt("Enter the beginning of odometer reading");
let endMilage=prompt("Enter the end reading of odometer");
let numberOfGallonsOfGas=prompt("Enter the number of gallons of gas");
let milesPerGallon=(endMilage-startMilage)/numberOfGallonsOfGas;
console.log(Math.round(milesPerGallon));
//Question number 5

let age=prompt("Enter your age");
let range=220-age;
let slowHeartRate=0.65*(range);
let fastHeartRate=0.85*(range);
console.log("the slowest heart rate is: "+slowHeartRate+" per minute and below.");
console.log("The fastest heart rate is: "+fastHeartRate+" per minute and above.")
