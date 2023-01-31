//lect 09
//loops --> for loop, for in loop, for of loop;

//for loop
let sum=0;
let n=prompt("enter the number");
n=Number.parseInt(n);

for(let i=0;i<n;i++){
  sum+=(i+1);
}
console.log("sum of first "+ n +" natural nmbers is "+ sum);

//for in loop

let obj = {
  ankit: 90,
  shubh: 45,
  abhishek: 80,
  ashutosh: 85
}

for(let a in obj){
  console.log("marks of "+ a +" is 5" + obj[a]);
}

//for in loops is also works with arrays



//for of loop
//object must be iterable so that for of loop can work
for(let b of "ankit"){
  console.log(b);
}

