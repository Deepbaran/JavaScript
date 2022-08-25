// Closure - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

function init() {
  var firstName = "Deep";
  function sayFirstName() {
    console.log(firstName);
  }
  return sayFirstName; //reference to sayFirstName method
}

var value = init(); // returned the sayFirstName method and we can execute the method anytime we want

value(); //Deep
// As we have the reference to the sayFirstName method and as it uses the firstName variable inside the init method, so memory cannot free up init completely even after the execution of the init method and that is why even after the completion of the init method, we still have the value of firstName with us.
// So the init execution context is still there along with the sayFirstName execution context.

function doAddition(x) {
  return function (y) {
    //This is an anonymous function
    return x + y;
  };
}

var add = doAddition(5);
var res = add(4); // Here also we can see use of closure. As even after exceution of doAddition, we can still access x
console.log(res);

console.log(doAddition(5)(4));

doAddition(5)(4); //This is called Currying

// Lexical Scope - The scope in which a inner function can access the varaibles of it's outer function is called Lexical Scope.
// Closure - Even after execution of the outer funciton, the inner function can still access its variables because the outer function values are not lost but retained. This is called Closure.

var sum = function (a, b, c) {
  return {
    getSumTwo: function () {
      return a + b;
    },
    getSumThree: function () {
      return a + b + c;
    }
  };
};
var store = sum(3, 4, 5);
console.log(store.getSumTwo()); //7
console.log(store.getSumThree()); //12
