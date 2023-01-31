//lect 08
//practice questions

//question 01
//chcek age is between 10 and 20

let age = prompt("enter age ");

if(age>=10 && age<=20){
  console.log("yes");
}
else{
  console.log("no");
}

//question 02
let a=prompt("enter your age");

a=Number.parseInt(a);
switch(a){
  case 12:
    console.log("you age is 12 and you age is special");
    break;
  default:
    console.log(`you age is ${a}`);
    
}12


//question 03
//check number is divisible by 2 and 3 or not

let num = prompt("enter number");
num = Number.parseInt(num);

if(num%2==0 && num%3==0){
  console.log("yes");
}
else {
  console.log("no");
}


//question 03
//check number is divisible by 2 or 3 or not

let num2 = prompt("enter number");
num2 = Number.parseInt(num2);

if(num2%2==0 || num2%3==0){
  console.log("yes");
}
else {
  console.log("no");
}


//question 05
//you can drive if age>18 using ternary operator

console.log("you can",age>18?"drive":"not drive");
