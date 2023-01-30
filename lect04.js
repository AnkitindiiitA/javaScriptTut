console.log("tutorial 04:");
//java script has 7 primitive datatypes: NNSSBBU
//Null, Number, Symbol, String, Boolean, BigInt, Undefined

//Non-primitive datatypes: Objects are key value pair

//defining primitive datatypes

let a=null;
let b=345;
let c=true;
let d=BigInt("546");
let e="ankit";
let f=Symbol("I am Peace");
let g=undefined;
let h=BigInt("546")+BigInt("4");
let i

console.log(a, b, c, d, e ,f, g, h, i);
console.log(typeof d);


//Objects in JS: defining non-primitive datatypes

const item = {
  "ankit" : true,
  "Shubh" : false,
  "abhishek" : 67,
  "ashutosh" : undefined
}

console.log(item);
console.log(item["ankit"]);
console.log(item["rohan"]);


