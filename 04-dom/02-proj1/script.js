// There are various Timed events in JS that we can do.
// The two most used are:
// setTimeout(function, milliseconds)
// setInterval(function, milliseconds)

// setTimeout(function, milliseconds): We define a millisecond as duration for which the timeout (paus the execution of the code) occurs and then the function (callback) gets executed. So, pause for a defined millisecond then do the task in the function. (How much time to wait before executing the function) [Timeout for a particular millisecond then resume palying (callback)]

// setInterval(function, milliseconds): For a given duration (milliseconds) the function (callback) keeps on executing. So, the callback will take x milliseconds to execute and till that x milliseconds are over, the callback will not execute again and once the time is up it will execute again and his will contiue until we give a condition for the setInterval to be over. (In what interval the function will keep on running)  [Keep on playing football till defined milliseconds.]

// setInterval will help in keep on changing the number till we reach  1000
var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");
let count = 0;
counter.innerText = count;
setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  } //As there is no other condition, so after count reached 1000, it does not know what it should do.
}, 1); //The callback will execute every 1 millisecond

setTimeout(() => {
  followers.innerText = "Followers on Instagram!";
}, 5000); //The callback will be executed after a 3 seconds delay and it will be executed only once, unlike setIterval

// Both setTimeOut and setInterval are asynchronous
// So while they execute, JS does not stop the execution, rather keeps on executing other things in parallel while these two keeps executing at their own designated times.
