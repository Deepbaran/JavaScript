/*
{} - This is not a scope in JS
JS only considers as a scope.
*/

// Lexical scope - is the ability for a function scope to access variables from the parent scope. We call the child function to be lexically bound by that of the parent function.

// console.log(name); //undefined
var name = "Deep";

// console.log(name); //ERROR
// let name = "Deep";

console.log(lastName); //undefined
if (true) {
  //Other languages consider this as a scope but JS does not
  var lastName = "Kar"; //Changin the declaration to let from var will make sure that it is not accessible outside of {}
  console.log(lastName); //Kar
}
console.log(lastName); //Kar

//This is the reason always use let incase of 'if' and 'for' as if we use var, then the variable is still accessible even after they are done executing and outside of their {}
