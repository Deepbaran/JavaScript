// Debouncing and Throttling is not provided by JS.
// They are achieved by using the setTimeout Web API

//While searching using a search bar or resizing a window size or scrolling, to prevent unwanted functions calls, we use concepts like debouncing and throttling.
//So basically to prevent unwanted function calls we use them.
//Unwanted function calls bring down the performance of the application.
//Repetitive function calls can make the application slow by bringing down its performance.
// So, we will want those functions to be called in two scenarios rather than always getting called:
// 1. Make the function get called after a specific time interval rather than always getting called.
// 2. When the function is getting called at a specific time interval, the user is not making any requests.

//The 1st case is debouncing and the 2nd case is throttling

//Debouncing use case /concept in search bar:
/*
In a ecommerce website when we search for "laptop" then the search bar gives recommendation after couple of secs not at the time that I am typing it.
It could have given me suggestions when I typed 'l' or 'a' or 'p' or 't' or 'o' or 'p' but it did not. It gave me suggestions couple of secs after I completed typing.
So, basically we make sure that for each keypress the search or suggestion fucntion does not execute but couple of seconds after it executes.
One thing to note is that, if when we stop typing "laptop", the timer for function to be called starts but in that interval we again type something, let's just say we added "13 inch" after "laptop", then the timer to call the function gets reset and again starts coutdown from beginning.
*/
//Basically function call after few seconds once the user stops action.
//We can achieve debouncing using setTimeout.
let counter = 0;

function getData() {
  console.log("fetching Data" + counter++);
}

function myDebounce(call, d) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer); //Clear the timer that is already doing the countdown
    timer = setTimeout(() => {
      call();
    }, d);
  };
}

const betterunction = myDebounce(getData, 1000);
