/*
EVENT LOOP:
JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.

As JS is a singlethreaded language, all of its code run in a single code. This makes it prone to get blocked. If a piece of code is waiting for some i/p or image or api call or something else,  then rest of the code gets blocked till it gets resolved. To tackle this issue, we use asynchronous code, which makes these blocking code wait and continue to execute rest of the code. In this way we can write non-blocking code and overcome the single-thread block issue.
This is non-blocking IO.
Async code can be loading an image, loading some data from the db or doing some api calls.
*/

const uno = () => {
  console.log("I am One");
};

const dos = () => {
  setTimeout(() => {
    //AS setTimeout is a asynchronous function, it will let the rest of the code to run while the timer goes on and once its over, it will execute.
    //In this way, it will not block the execution of the rest of the code while its waiting.
    console.log("Hello");
  }, 3000);
  console.log("I am Two");
};

const tres = () => {
  console.log("I am Three");
};

uno();
dos();
tres();
