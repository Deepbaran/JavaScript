// Lexical Scope: A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

function init() {
  var firstName = "Deep";
  function sayFirstName() {
    console.log(firstName); // Here JS will first try to search for firstName in this sayFirstName function scope, as it is not there, it will keep going to upper scopes till it gets the firstName due to scope chaining.
  }
  sayFirstName(); //As soon this function is called, on top of the init execution context the sayFirstName execution context will come
  // Once the sayFirstName function finishes running the sayFirstName execution context will go away
}

init(); //As soon this function is called, on top of the global context the init execution context will come
// Once the init function finished running, the init execution context will go away and only the global context remain.
