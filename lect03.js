console.log("tutorial 03: let, var, const");

//var is global level variable
//const, let are block level variables

var a=5;
var b="ankit";
var a=null;
var a=undefined;
{
  var b="this"
  console.log(b);
  // let b="this"
  // console.log(b);
}
console.log(b);

let e="abhishek";
//let e=5; ---> this is not allowed declaring same let in same level

const author="ankit";
//const author=5;//this is not allowed
//later assignment of const variable is not allowed
//example: const x; -->not allowed
