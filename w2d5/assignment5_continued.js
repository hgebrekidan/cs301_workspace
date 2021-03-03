// Question number 4
// HCF of two numbers
let prompt=require('prompt-sync')();
let firstNumber=prompt('Enter the first number : ');
let secondNumber=prompt('Enter the second number : ');
let HCF=function (num1,num2){
   let higestCommonFactor;
    for(let i=1;i<num1&&i<num2;i++){
        if(num1%i===0&&num2%i===0){
            higestCommonFactor=i;
            (higestCommonFactor);
        }
    }
    return higestCommonFactor;
}

console.log(`${HCF(firstNumber,secondNumber)} is the HCF of  ${firstNumber} and ${secondNumber}`);
// LCM of two numbers
let LCM=function (num1,num2){
let lcm=(num1*num2)/HCF(num1,num2);
return lcm;
}
console.log(`${LCM(firstNumber,secondNumber)} is the LCM of ${firstNumber} and ${secondNumber}`);