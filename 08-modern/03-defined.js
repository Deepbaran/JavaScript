//Not defined or undefined in JS

// Whenever we declare a variable in JS, before it's execution that variable needs some memory
console.log(a); //undefined
if (a === undefined) {
  console.log("udefined");
} else {
  console.log("Not defined");
}
var a = "Deep";
console.log(a); //Deep
var a = 4; //To change the value in the varaiable, the variable will not become undefined again
console.log(a); //4

// console.log(b); //Not defined

//undefined - The variable was declared but was never defined a value or yet to be defined in the code execution.
//Not defined - The variable was never declared. So was never assigend any memory

//So, undefined and not defined differ because of memory allocation. For undefined, some memory was allocated before of it's execution in hopes that it would be defined during the code execution. But for Not defined, no memory was ever allocated for it.

//So before execution, all declared varabales are allocated some memory of undefined and after execution, their real values get assigned in memory

// (obj!==undefined || obj!==null)?obj.name:"";
