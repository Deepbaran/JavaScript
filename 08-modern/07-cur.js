// Currying function in JavaScript

// function Addition(a, b, c) {
//   return a + b + c;
// }
// let res = Addition(2, 3, 4);
// console.log(res);

// function Addition(a) {
//   //Closure - Returing a function inside a function and the value inside the lexical scope will also not get lost
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// let res = Addition(2);
// console.log(res);
// let data = res(4);
// console.log(data);
// let data1 = data(7);
// console.log(data1);

// let res = Addition(2)(4)(7);
// console.log(res);

//Real Use Case
let userObj = {
  name: "Deep",
  age: 24
};

function userInfo(obj) {
  return function (userInfo) {
    return obj[userInfo];
  };
}
// let res = userInfo(userObj);
// console.log(res);
// let data = res("name");
// console.log(data);
console.log(userInfo(userObj)("name")); //Deep
console.log(userInfo(userObj)("age")); //24
