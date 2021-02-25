// Question number 1

let prompt=require('prompt-sync')();
let weather=prompt("Enter how is the weather today: ");
let footWear="";
if(weather==='hot'){
    footWear="You should wear: Sandals";
}else if(weather=='rain'){
    footWear="You should wear: Galoshoes";
}else if(weather==='snow'){
    footWear="You should wear: Boots";
}else{
    footWear="You should wear: Sneakers";
}

console.log(footWear);
console.log("-------------------------------")
// Question number 2

let studentName=prompt("Enter student's name: ");
let completedCredits=prompt("Enter number of completed credits: ");
if(completedCredits<30){
    console.log("The student is: "+studentName+" and he/she is a Freshman.");
}else if(completedCredits>=30&&completedCredits<60){
    console.log("The student is: "+studentName+" and he/she is a Sophomore.");
}else if(completedCredits>=60&&completedCredits<90){
    console.log("The student is: "+studentName+" and he/she is a Junior.");
}
else{
    console.log("The student is: "+studentName+" and he/she is a Senior.");
}
console.log("-------------------------------------");
// Question number 3

let cost=prompt("Enter the cost of the house: ");
if(cost<50000){
    console.log("$"+0.05*cost);
}else if(cost<100000){
    console.log(1000+0.1*(cost-50000));
}else if(cost<200000){
    console.log(2000+0.15*(cost-100000)+" dollars");
}else{
    console.log(5000+0.1*(cost-200000));
}
// An other method for question number 3

let cost=+prompt("Enter the cost of the house: ");
let downPayment;
if(cost<50000){
    downPayment=("$"+0.05*cost);
}else if(cost<100000){
    downPayment=(1000+0.1*(cost-50000));
}else if(cost<200000){
    downPayment=(2000+0.15*(cost-100000)+" dollars");
}else{
    downPayment=(5000+0.1*(cost-200000));
}
console.log(downPayment);
console.log("---------------------------------------");
// Question number 4
// For this queston we have 3 options of status student, faculty and others
// and for each status we have 3 other options of number of books, these 3 
// options of have thier own duration of time. So this could be done using 
// nested if condtion or logical expressions.
// input        | processing                                            |output
// status       |  compare status with student, faculty or others       |time in weeks
// numberOfBooks|  compare 3 options of number of books with each status|

let status=prompt("Enter the status of the borrower: ");
let numBooks=+prompt("Enter number of books which are overdue: ");
if(status==="student"){
    if(numBooks===0){
        console.log("Loan duration will be: 6 weeks");
    }else if(numBooks<3){
        console.log("Loan duration will be: 4 weeks");
    }else{
        console.log("Loan duration will be: 2 weeks");
    }
}else if(status==="faculty"){
    if(numBooks===0){
        console.log("Loan duration will be: 12 weeks");
    }else if(numBooks<3){
        console.log("Loan duration will be: 10 weeks");
    }else{
        console.log("Loan duration will be: 8 weeks");
    }
}else{
    if(numBooks===0){
        console.log("Loan duration will be: 4 weeks");
    }else if(numBooks<3){
        console.log("Loan duration will be: 3 weeks");
    }else{
        console.log("Loan duration will be: 2 weeks");
    }
}
console.log("----------------------------------------");
// Question number 5

// we have 3 types of ages and each types have two options of 
// summer or fall, or winter or spring options and this two options
// of seasons have their own result of bed time output. This can
// be calculated using nested if or logical expression too.
// input   |   processing                                       |  output  |
// age     |  if((age<5)&&(weather===summer||weather===fall))   | bed time |
//         |  if((age<5)&&(weather==winter||weather===spring))  | bed time |
// season  |  similar logical expression for age<=12 and age>12 | bed time |

let age=prompt("Enter children age: ");
let season=prompt("Enter one of the four seasons: ");
if(age<=5){
    if(season==="summer"||season==="fall"){
        console.log("Child's bed time will be: 8:30PM");
    }else if(season==="winter"||season==="spring"){
        console.log("Child's bed time will be: 8:00PM");
    }
}else if(age<=12){
    if(season==="summer"||season==="fall"){
        console.log("Child's bed time will be: 9:30PM");
    }else if(season==="winter"||season==="spring"){
        console.log("Child's bed time will be: 8:30PM");
    }
}else{
    if(season==="summer"||season==="fall"){
        console.log("Child's bed time will be: 10:30PM");
    }else if(season==="winter"||season==="spring"){
        console.log("Child's bed time will be: 9:30PM");
    }
}
