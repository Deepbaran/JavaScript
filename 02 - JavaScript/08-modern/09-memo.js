// Implementing Memoization in JavaScript
// Memoization is an optimization technique that can be used to reduce
// time-consuming calculations by saving previous input to something called cache and
// returning the result from it.

/*
Memoization is a specific form of caching that involves caching the return value of a function based on its parameters. Caching is a more general term; for example, HTTP caching is caching but not memoization.
*/

/*
Importance of Memoization: When a function is given in input, it performs the necessary computation and saves the result in a cache before returning the value. If the same input is received again in the future, it will not be necessary to repeat the process. It would simply return the cached answer from the memory.
*/

let sum = 0;
const calc = () => {
  for (let i = 0; i <= navigator; i++) {
    sum += i;
  }
  return sum;
};

// console.time();
// console.log(calc(5));
// console.timeEnd();

//This is how we can achieve caching in JS
const memoize = fun => {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      console.log("cache");
      console.log(cache);
      return cache[n];
    }
    console.log("Calculating first time");
    console.log(cache);
    let res = fun(n);
    cache[n] = res;
    return res;
  };
};
const efficient = memoize(calc);
console.time();
console.log(efficient(5));
console.timeEnd();
console.time();
console.log(efficient(5));
console.timeEnd();
