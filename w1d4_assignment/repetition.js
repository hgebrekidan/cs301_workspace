// Question number 1
let prompt=require('prompt-sync')();
let number=+prompt("Enter the number : ");
let count=0;
for(let i=2; i<=number;i++){
    if(number%i===0){
        count++;
    }
}if(count==1){
    console.log(" : is a prime number.")
}else{
    console.log(" : is not a prime number.")
}
// Using break 
let num=+prompt("Enter the number");
let j=2;
counter=0;
let prime="";
while(true){
if(num%j===0){
    conunter++;
    if(counter>1){
        prime=("Not prime number")

        break;
    }
}else{
    prime="Prime number";
}
}console.log(prime);
// Question number 2
// Factorial multiplication result

let fact=prompt("Enter the number");
let result=1;
for(let i=fact;i>0;i--){
    result=result*i;
}
console.log(result);

// Question number 3

let prompt=require('prompt-sync')();

const PIN=1212;
let count=0;
for(let i=0;i<3;i++){
    let inputPin=+prompt("Enter the pin number : ");
    if(inputPin!==PIN){
        if(count===3){
            break;
        } 
        console.log("Incorrect, try again");
        count++;
        continue;
    }else{
        console.log("correct, Welcome back");
        break;
    }
}if(count===3){
    console.log("Sorry, but you have been locked out");
}
// Question number 4
// Fibbonacci Series
const fibNumber = prompt("Enter the number of terms: ");
let n1 = 0;
let n2 = 1;
let nextNumber;

console.log("The Fibonacci Series will be: ");

for (let i = 1; i <= fibNumber; i++) {
    console.log(n1);
    nextNumber = n1 + n2;
    n1 = n2;
    n2 = nextNumber;
    
}

// Question number 5
// Sum of all digits of a number

let value=prompt("Enter the number");
let sum = 0;
while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);
// Question number 6
// Part one


for(i=1;i<=5;i++){
    let k="";
     for (j=i;j>=1;j--){ 
        k=k+i;
     }
     console.log(k);
 } 
 /*
 1
 22
 333
 4444
 55555
 */
// Part two

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        console.log(i);
    }
}
// Part three

for(i=5;i>=1;i--){
    let k="";
     for (j=i;j>=1;j--){ 
        k=k+i;
     }
     console.log(k);
 } /*
    55555
    4444
    333
    22
    1
 */