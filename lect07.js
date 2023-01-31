//lect 07
//if, if else, if else if else -->three types of conditional statements;


//prompt used to take input
let a = prompt("Hey whats your age?");

console.log(typeof a);
//convert a from string to integer

a = Number.parseInt(a);
console.log(typeof a);

if(a > 0){
  alert("this is a valid age.");
}
else {
  alert("this is an invalid age.");
}

if(a < 0){
  alert("this is an invalid age.");
}
else if(a<9){
  alert("you are a kid and you cannot even think of driving.");
}
else if(a<18 && a>=9){
  alert("you are a kid and you can think of driving after 18. ")
}
else{
  alert("you can drive.");
}

console.log("Done");
//if we want any information about js just go to your browser and search mdn js topic_name.//

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

//ternary operator
alert((a>=18)?"you are an adult.":"you are not an adult.");
console.log("you can",a<18?"not drive":"drive");



