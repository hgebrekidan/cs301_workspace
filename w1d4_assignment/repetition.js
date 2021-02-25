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
let num=prompt("Enter the number");
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


