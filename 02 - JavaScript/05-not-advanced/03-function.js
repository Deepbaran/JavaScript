/*
FUNCTIONAL PROGRAMMING:
- It is a way of programming.
- Three core parts of functional programming:
1. Keep data and function totally separate.
2. Do not do state change as much as possible.
3. Functions are treated as first class
*/
// 1st part:
let score = 456;

function addBonus() {
  score = score + 45; //Here we are referencing the data outside of the function so if that changed the o/p will also be affected
  return score;
}

// functional programming manner:
function addBonus(score) {
  //Debugging this much easier because it is not referencing any global data and it's a compact thing in itself.
  //It also not much dependant on the data that is being passed
  return score + 45; //Here we are not referencing the data from outside the function, rather a particular value if passed and we work on it, so after passing the value even if the value gets changed outside, it does not affect the o/p here
}

// 2nd Part: State Change
let deep = "hey";
deep = "hey there";
deep = "hey there, everyone";
// Here we changed the state of the variable/gloabal state (Anything that is defined in Global scope is part of global state) three times which is bad in functional programing.
// We should not change the values of an already initialized variable much.
// Don't update the same varibale again and again, rather declare a new variable.
// Best way to control it is to define global variables with const

// 3rd Part: Treat functions as a normal vraible. i.e, declare them in a variable, pass them in a function, return them in a function, etc.
const addScore = function (e) {
  return e;
};

addScore(function () {
  console.log("Hello");
})(); //Hello

//////////////////////////////////////////////////////////////////////////////////////////////////

// function sayHello() {
//   console.log("I say hello");
//   console.log("I again say hello");
// }
// sayHello();

// IIFE (Immediately Invoked Function Expression) OR Self-Executing Anonymous Function
// Self-Executing means that no one is executing this function, it is executing itself.
// Anonymous means that the function does not have a name
(function () {
  console.log("I say hello");
  console.log("I again say hello");
})();
