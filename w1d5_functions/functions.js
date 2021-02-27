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
let height=prompt("Enter the height of the cylinder : ");
function areaOfCircle(r=0){
     let circleArea=(Math.PI*r*r)/2;
    return circleArea;
}
  console.log(areaOfCircle(radius));

function volumeOfCylinder(r=0,h=0){
    let cylinderVolume=areaOfCircle(r)*h;
    return cylinderVolume;
}
let result=volumeOfCylinder(radius,height);
console.log(result);

//Question number 3

let prompt = require("prompt-sync")();
let sweep = prompt("Enter sweep of the house :");
let height = prompt("Enter height of the house:");
height = parseFloat(height);
let width = prompt("Enter width of the house :");
width = parseFloat(width);
let depth = prompt("Enter the depth of the house :");
depth = parseFloat(depth);

function houseVolume(w, d, h, sw) {
 return roofVolume(w, sw, d) + livingVolume(w, h, d);
}
function livingVolume(w, h, d) {
 return w * h * d;
}
function roofVolume(w, sw, d) {
 return triangleArea(w, sw) * d;
}
function triangleArea(w, sw) {
 let s = (w + 2 * sw) / 2;
 let x = (s - w) * (s - sw) * (s - sw);
 return Math.sqrt(s * x);
}
console.log("house volume is :" + houseVolume(width, depth, height, sweep));
//console.log("house volume is :" + houseVolume());

