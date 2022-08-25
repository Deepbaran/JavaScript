/*
There are two types of context.
1. Global Execution Context - Collect the information
2. Functional Execution Context - Execution Context comes and goes away for each line of code. If the code is small then the Execution Context and goes away, but if there is some execution (like sayMe() function call), a big Execution Context comes and once the execution is done, then it will go away. These Execution functions keep stacking on top each other. The first one that stacks at the bottom is Global Context and all the Execution contexts keep stacking on it one by one. As soon as the execution is done, the Execution Context goes away.

Execution Context does not only execute a line or function. It brings us couple of more things. Three Major things it brigs are:
1. Variable Object
2. Scope Chain
3. this keyword

The Execution context that is at the top of the Context stack, is the only one that our program knows about. So, if there are multiple variables being defined inside that Execution Context, it cannot dig below it and try to find that variable.

Anything that is inside a fuction is in a function scope and will be inside a Execution context that is executing the function. Everything else including code blocks, if-else, switch-case, etc are in the Global scope, so they will be inside the Global Context and can access everythin inside the Global Context. We can access variables in the same context.

||Execution Context||
||Execution Context||
||Execution Context||
||Global Context   ||

If there is not function to Execute then Execution Context comes and goes and all the values gets stored in Global Context.

Whenever there is an Execution Context, there are two rules that we need to follow:
1. Function declarations are scanned and made available. <- This is the reason because of which we are able to call the function first then have it's definition. This was possible because of Global Context. Global Context the whole code and when it finds a funciton definition, it stores the definition somewhere for the whole code to access.
2. Variable declarations are also scanned and made undefined. <- The variable is accessible to the whole code but it remains undefined till it's definition is executed.

These two rules are Hoisting.

Hoisting takes place at the time of code compilation so that while running everything is in place.
*/

// var num = 2; //Execution Context

// //Execution Context
// function sayMe() {
//   console.log("Say me");
// }

// sayMe(); //Execution Context

tipper("80"); //85

//This is a function
function tipper(a) {
  var bill = parseInt(a);
  console.log(bill + 5);
}

// tipper("80"); //85

// bigTipper("200"); //ERROR <- bigTipper is a undefined variable.

//This is a variable
//Now as the function is stored inside the variable,
// Global Context will scan it and store the variable as undefined
//for the whole code to access it as undefined.
var bigTipper = function (a) {
  var bill = parseInt(a);
  console.log(bill + 15);
};

bigTipper("200");

console.log(name); //undefined <- Due to Global Context we can access it but as it is still not defined, so it stays undefined. This also shows that the variable name exists but it's not defined yet
var name = "Deep";
console.log(name); //Deep

console.log(name); //Deep <- The Execution Context of MR. D is not at the top, the Execution Context with name Deep is at the right now. That's why for the value of name, Deep came instead of MR. D
function sayName() {
  var name = "MR. D";
  console.log(name); //MR. D <- Here the Execution Context with name as MR. D as at the top.
}
console.log(name); //Deep <- The Execution Context of MR. D is not at the top, the Execution Context with name Deep is at the right now. That's why for the value of name, Deep came instead of MR. D
sayName(); //Now the Excution Context with name as MR. D is at the top. But as soon as the Execution of the function gets finished, theis Execution Context goes away and the Execution Context with name as Deep again comes at the top.
console.log(name); //Deep

console.log(a); //Undefined <- This is udefined because var a exists in the global scope so it is in the Global Context.
{
  var a = "Kar";
}
console.log(a); //Kar

// console.log(b); //ERROR
function fun() {
  var b = "cat"; //variable b only exists inside this function's execution context
}
// console.log(b); //ERROR

/*
Basically at the time of execution, function gets pushed to Global Execution Context (Call Stack in debugger) and once executed, it will be popped out of Global Execution Context (Call Stack in debugger). 
*/
