/*
Callback Fuction - A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
 */

// function isEven(element) {
//   // if (element % 2 === 0) {
//   //   return true;
//   // }
//   // return false;

//   return element % 2 === 0;
// }

// var isEven = function(element) {
//   // if (element % 2 === 0) {
//   //   return true;
//   // }
//   // return false;

//   return element % 2 === 0;
// }

// console.log(isEven(2)); //Will give error as isEven variable is there in context but it was not determined yet that it is a function
var isEven = element => {
  // if (element % 2 === 0) {
  //   return true;
  // }
  // return false;

  return element % 2 === 0;
};

// console.log(isEven(2)); //If we are not storing the function in a variable and if that function does not return something, then trying to print it will give error. But if it's stored in a variable then in that situation it will log undefined.

var result = [2, 4, 6, 8].every(isEven); //every will do a test on every element of the array. We need to pass the reference to the function using which we will do the test. Here isEven is a callback function as its reference is passed to every for execution inside it.

console.log(result); //true <- This came because every element in the array is giving true after the experiment.

result = [2, 4, 6, 3].every(isEven);
console.log(result); // false <- If any element fails the test then it will return false.

// Callback Function using arrow function
result = [2, 4, 6, 8].every(e => {
  return e % 2 === 0;
});
console.log(result);

result = [2, 4, 6, 8].every(e => e % 2 === 0); //When using only one statement, we do not need a return statement and curly braces inside arrow functions. Or we can wrap that single statements inside () and if we use {} then we will have to add a return statement.
console.log(result);
