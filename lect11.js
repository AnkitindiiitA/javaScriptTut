//lect 11
//functions in java script



function add(a,b){
  console.log(`sum of two numbers is ${a+b}`);
}

function average(a,b){
  return Math.round((a+b)/2);
}

//craeting function using arrow function

const sum = (p,q)=>{
  return p+q;
}

let a=1;
let b=2;
let c=3;

add(c,b);
add(a,b);
add(a,c);
console.log("average of the given two numbers is ",average(a,b));
console.log("sum of the given two numbers is ",sum(a,b));
