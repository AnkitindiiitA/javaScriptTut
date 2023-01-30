//lect 05

//question 01
//create avariable of type string and try to add a number to it

//source code:
let a="ankit";
let b=5;
console.log(a+b);

//question 02
//use typeof operator to find the datatype of the string in last question

//console.log(typeof a+b);--> this give string5 as an output
console.log(typeof (a+b));

//question 03
//create a const object in javascript ,can you change it to hold a number later

const item = {
  name: "ankit",
  section: 1,
  isPrincipal: false
}

//item=54;--> this is not allowed so we cann't change it to hold a number later

//question 04
//Try to add a new key to the const object in problem 3 were you able to do it?

//assigning new object to item 
//item = {} --> assigning new object to item object is not allowed
item['ashutosh']="coder";
item["ankit"]=36;
console.log(item);
//yes we are able to add a new key to the const object


//question 04
//write a js program to create a word-meaning dictionary of 5 words

const dict = {
  appreciate: "recognize the full worth of",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work"
}

console.log(dict.yakka);
console.log(dict['yakka']);


