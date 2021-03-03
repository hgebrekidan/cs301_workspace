"use strict";
// Question number 1
// Prime number or not
let count=0;

function checkPrime(num=0){
    for(let i=2; i<=num;i++){
        if(num%i===0){
            count++;
        }
    }if(count==1){
        return true;
    }

       return false;
    
}

let prompt=require('prompt-sync')();
let number=prompt("Enter number : ");
     console.log(checkPrime(number));
// Question number 2
// Area of circle

let radius=prompt("Enter the radius of the circle : ");
let hight=prompt("Enter the height of the cylinder : ");
function areaOfCircle(r=0){
     let circleArea=(Math.PI*r*r)/2;
    return circleArea;
}
  console.log(areaOfCircle(radius));

function volumeOfCylinder(r=0,h=0){
    let cylinderVolume=areaOfCircle(r)*h;
    return cylinderVolume;
}
let result=volumeOfCylinder(radius,hight);
console.log(result);

//Question number 3

//let prompt=require('prompt-sync')();
let width=+prompt('Enter the width : ');
let depth=+prompt('Enter the depth : ');
let height=+prompt('Enter the height : ');
let sweep=+prompt('Enter the sweep : ');
function houseVolume(w,h,d,s){
let volume=livingVolume(w,h,d)+roofVolume(d,s,w);
return volume;
}
console.log("Total volume of the house is: "+houseVolume(width,height,depth,sweep));
function livingVolume(w,h,d){
let volume=w*h*d;
return volume;
}
function roofVolume(d,s,w){
let volume=d*triangleArea(s,w);
return volume;
}
function triangleArea(s,w){
let tringelHeight=Math.sqrt((s*s)-((w/2)*(w/2)));
let area=(0.5*tringelHeight*w)*2;
return area;
}

