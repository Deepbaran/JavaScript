// Infinite Currying in JavaScript

// My Brute implementation
// let sum = 0;
// function add(a) {
//   if (a === undefined) {
//     return sum;
//   }
//   sum += a;
//   return add;
// }

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    else return a;
  };
}

console.log(add(4)(5)(6)(8)(10)());
