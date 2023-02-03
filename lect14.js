//lect 14
//topic:- string properties and methods

//1
let name = "Ankit\"";
//2
console.log(name.length);

//3
console.log(name.toUpperCase());
console.log(name.toLowerCase());

//4 slice with two argument
console.log(name.slice(2,4));

//5 slice with one argument
console.log(name.slice(2));

//6 .replace
let naam = "Ankit bhai";
let newnaam = naam.replace('bhai','bhau');
console.log(newnaam);
console.log(name.replace('Ank','Pnk'));
console.log(name.replace('ank','Pnk'));//no replacement
console.log(name);

//7. .concat
let friend = 'Naman';
console.log(name.concat(' is a frind of ',friend," ok."));

//8. .trim :-removes extra whitespaces from start and end
let friend2 = '          Meena        a        ';
console.log(friend2.trim());


//strings are immutable inorder to access the character at an index we use the following

let fr = 'Ayush'+'Abhishek';
console.log(fr[0]);
console.log(fr[1]);
console.log(fr[2]);
console.log(fr[3]);
console.log(fr[4]);
console.log('\n');

let i=0;
while(i<fr.length){
  console.log(fr[i]);
  i++;
}
console.log(fr);

//strings are immutable you can not change it
fr[0]='B';//it will not change the string; if we apply a function it will //return new string not the orginal one;
console.log(fr);

