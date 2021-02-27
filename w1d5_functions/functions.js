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

let radius=prompt("Enter the radius of the circle : 10");
function areaOfCircle(radius=0){
     let circleArea=(Math.PI*radius*radius)/2;
    return console.log(circleArea);
}
(areaOfCircle(radius));

function volumeOfCylinder(height=0){
    let cylinderVolume=(areaOfCircle)*height;
    return console.log(cylinderVolume);
}
let length=prompt("Enter the height of the cylinder : ");
(volumeOfCylinder(length));

//Question number 3

