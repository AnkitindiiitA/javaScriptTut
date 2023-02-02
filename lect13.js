
//lect 13 Introduction to Strings

let name = "ankit";
let name2='ayush';
console.log(name);
console.log(name2);
console.log(name.length);
console.log(name2.length);

//printing characters of a string
let i=0;
while(i<name.length){
  console.log(name[i]);
  i++;
}

//template literals (bakticks)
let boy1='ankit';
let boy2='ayush';
let sentence = `${boy1} is a friend of ${boy2}.`;
console.log(sentence)

//escape sequence characters
//let fruit = 'bana'na'--> not aplicaple use \before it
console.log('\n');
let fruit = 'bana\'na';
console.log(fruit)

console.log('\n');
let fruit2 = "bana\"na";
console.log(fruit2);
