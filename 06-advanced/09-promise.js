/*
promises
resolve
reject
async
await

Whenever we are trying to fetch something that is not stored locally, it is better to use async.

Promises are a concept where a variable or function promises us that it will bring some data for us. It can either succeed(resolve) or fail(reject) to keep its promise.
Promises are an event that might be fulfilled in the future or might be not. But it will give some king of response in either case.
As we can create arrays, create objects, create objects from our custom defined classes, we can also create similar things from promises too.
Promises are asynchronous.
Make the method asynchronous that is calling the method that returns a Promise.
*/

const uno = () => {
  return "I am One";
};

// const dos = async () => {
//   setTimeout(() => {
//     return "I am two";
//   }, 3000);
// };

const dos = () => {
  //returning a Promise object that either will be resolved (successful) or rejected(error). Similar to try-catch
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am Two");
      //reject("I am Two"); //This will give error if we use it like this. We will need to handle rejects explicitly before returning.
    }, 3000);
  });
};

const tres = () => {
  return "I am Three";
};

const callMe = async () => {
  //Made this asynchronous as it is calling a method that returns a Promise
  let valOne = uno();
  console.log(valOne);

  // let valTwo = dos();
  // console.log(valTwo);
  //Before adding the async keyword to dos: This will give undefined as by the time it gets executed the dos method is still waiting for setTimeout to get executed so, it does not return anything.
  //After adding the async keyword to dos: This will give Promise { undefined } to say that there us a Promise involved which is to be fulfilled.

  let valTwo = await dos(); //wait here till dos method returns something (till the Promise is resolved or rejected)
  console.log(valTwo);

  let valThree = tres();
  console.log(valThree);
};

callMe();

//Promise --> async-await:
function getMessage() {
  return new Promise(resolve => resolve("hello world"));
}

function main() {
  //Promise chain to get the message from Promise
  getMessage().then(res => console.log(res));
}
async function main2() {
  //Async-await: wiating for the Promise to get resolved or rejected.
  const message = await getMessage();
  console.log(message);
}
main();
main2();
console.log(3); //THis will get executed before main() and main2() as they are asynchronous.
//Both promise chaining and async-await are asynchronous.
