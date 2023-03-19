sayHello(); //Hello <- This is possible because of Global Context

function sayHello() {
  console.log("Hello");
}

/*
Global Context:
JavaScript has big context in which everything resides. This is called window. This is the case if the code is running in the browser.

If the code is running on node, then window will not be the global context.

Everything in JS is inside a Global Context. Whenever the code executes, all the variables, functions, etc, are wrapped around and stored inside the Global Context.

Each engine has it's own Global context. In the browser, it will be always called window. To access the browser APIs like localStorage, etc. we will need to check if  the window object is available to us or not.

Global Context kicks in and starts collectiong the code as soon as code is written in the JS file.

window object is majorly tied with the browser.

That's why even if the function is defined later and called before it's defined, the function call executes succefully as the function definition is already stored in the Global Context.
*/

if (2 === 2) {
  console.log("This is again a true statement");
}

// var myName = "Deep";
// if (myName === window.myName) {
//   //As the code is running in node, so window is not the global context.
//   console.log("This is again a true statement");
// }
