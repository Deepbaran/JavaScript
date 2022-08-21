/*
Scope Chaining: If a scope does not have a thing then it will ask it's parent scope for it, and it also does not have the scope then it will also ask it's parent scope for this variable and this will go on till the thing is found. The scope will stop searching for the thing as soon as it gets the thing.

Scope chaining is possible only because the contexts get mounted on top each other and we drill down below and find the varaibales.

REMEMBER - Scopes will not search for things inside their child scopes.

The ancestor of all scopes is Global scope.

NOTE: In the world of JS, only FUNCTIONAL SCOPE is considered as a child scope, other scopes are not different scopes.
 */
// GLOBAL SCOPE
var name = "Deep";

console.log(`Line number 3 ${name}`);

function sayName() {
  // FUNCTIONAL SCOPE
  // This functional scope does not have the variable name inside it, so it will ask for this varibale from it's parnt scope (the global scope)
  console.log(`Linke number 6 ${name}`);
}
sayName();

function sayName2() {
  // FUNCTIONAL SCOPE Level 1
  name = "Mr. D";
  console.log(`Linke number 7 ${name}`);
  sayName2Two();
  function sayName2Two() {
    // FUNCTIONAL SCOPE Level 2
    // This is child scope of FUNCTIONAL SCOPE Level 1
    console.log(`Line number 10 ${name}`); // Mr. D
  }

  if (name) {
    // FUNCTIONAL SCOPE LEVEL 1
  }
}
sayName2();

{
  // GLOBAL SCOPE
}

if (name) {
  // GLOBAL SCOPE
}
