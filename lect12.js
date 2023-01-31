//lect 12
//chapter 3 practice set

//question 1
//write a program to print marks of a student in an object using for loop

let marks = {
  ankit: 90,
  shubh: 56,
  abhishek: 50,
  ashutosh: 60
}

for(let i=0;i<Object.keys(marks).length;i++){
  console.log("the marks of "+ Object.keys(marks)[i] + " is "+ marks[Object.keys(marks)[i]])
}

//question 2
//write the program in q1 using for in loop;

for(let key in marks){
  console.log("the marks of "+ key + " is "+ marks[key]);
}

//question 3
//write a program to print "try again" until the user enters the correct number

let cn=4;
let i;
while(i!=cn){
  i=prompt("enter a number");
}
console.log("correct number");

//question 4
//write function to find the mean of five numbers

const mean = (a,b,c,d,e)=>{
  return (a+b+c+d+e)/5;
}

console.log(mean(1,2,3,4,5));
