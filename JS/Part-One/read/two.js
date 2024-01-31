//WAP to print given number is 3 digit or not

var prompt = require('prompt-sync')();

var num= parseInt(prompt("Enter Number:"))

if(num >=100 && num <=999){
    console.log("Yes ! Given Number is 3 Digit")
}
else{
    console.log("No ! Given Number is not a 3 Digit")
}