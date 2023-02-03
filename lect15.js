//lect 15: practice on string

//q1
console.log("Ank\"".length); //because of escape sequence character




//q2
//source:- mdn include js;

const sentence = 'The quick brown fox jumps over the lazy dog.';

const word = 'fox';

console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "fox" is in the sentence"

//q2 startsWith,endsWith function of string
//startsWiht
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// Expected output: true

console.log(str1.startsWith('Sat', 3));
// Expected output: false

//endsWith
const str = 'Cats are the best!';

console.log(str.endsWith('best!'));
// Expected output: true

console.log(str.endsWith('best', 17));
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false





//q3 convert to lowecase;
let ex = "This Is A Tutorial";
console.log(ex.toLowerCase());





//q4
let strnew = "Please give Rs 1000";
let  amount = strnew.slice("Please give Rs ".length);
console.log(amount);
console.log(typeof amount);
amount=Number.parseInt(amount);
console.log(typeof amount);

//q5 try to change the 4rth character of the string ,can you able to do it.

let fr2='Deepika';
fr2[3]='R';
console.log(fr2);//strings are immutable so that cann,t change the //characters

