//To handle a library that does not have a good asynchronous approach, we need to wrap them inside a Promise so that we can use a async-await approach.

async function main() {
  //We will wait till the Promise sends a resolve or reject, then move on to the next line in this function.
  //While this is happening inside the function, the outside codes keep getting executed.
  await new Promise(resolve => {
    //Put the code inside the callback which is inside a new Promise.
    //As this is inside a Promise, so we can use it inside async-await
    setTimeout(() => {
      console.log("hello");
      reolve();
    }, 5000);
  });
  console.log("World");
}
main();
console.log("!");
