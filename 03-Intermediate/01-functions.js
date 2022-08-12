function sayHello(name) {
  //If nothing is passed, then name will be undefined
  // console.log("Hello there " + name);
  console.log(`Hello there ${name}. How are you?`);
}

sayHello("Deep"); //Hello there Deep. How are you?
sayHello("Deepbaran"); //Hello there Deepbaran. How are you?
sayHello(); //Hello there undefined. How are you?
sayHello(); //Calling a function
sayHello; //Referencing a function
console.log(sayHello); //[Function: sayHello]

function namastey() {
  return "Hello in India";
}

var msg = namastey();
console.log(msg);

//Returning a fuction
function b() {
  console.log("Hello");
}

function a() {
  return b;
}

var c = a();
console.log(c); //[Function: b]
c(); //Hello
a()(); //Hello
