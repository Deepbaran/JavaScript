// 1. Arrow functions are NOT hoisted
// 2. 'this' in arrow function is bound to the previous value of 'this' and not HOW it is called
// 3. We canot use new keyword with arrow function as they do not have a constructor.

// In normal functions 'this' can have multiple values depending upon how the function is called.
// But in case of arrow functions 'this' have only a single value and that is it's parent.

//HACK: Majority of the time 'this' in arrow function points to window.

/*
console.log(x()); //Uncaught TypeError: x is not a function
console.log(y()); //Uncaught ReferenceError: Cannot access 'y' before initialization

var x = () => {
  console.log("x");
};

let y = () => {
  console.log("y");
};
*/

/*
const obj = {
  someMethod: () => {
    return this;
  }
};
// THe value of "this" inside an arrow function
// is basically what its value would've been
// outside the arrow function
var a = obj.someMethod;
console.log(a()); //window
console.log(obj.someMethod()); //window

function myFunction() {
  return () => {
    return this;
  };
}
const myObj = myFunction();
console.log(myObj()); //window
// console.log(new myObj()); //Uncaught TypeError: myObj is not a constructor
*/

function myCar() {
  this.fuel = 0;
  //this -> myCar
  this.reFuel = function () {
    console.log(this); // this -> myCar
    setTimeout(function () {
      console.log(this); //this -> window
      this.fuel += 100;
      console.log("Rufueled! Current fuel = " + this.fuel);
    }, 1000);
  };
}

const Bugatti = new myCar();
Bugatti.reFuel();
//this inside the setTimeout or arrow function will point to window object.
//Current object is myCar
//It's parent object is window
//So, 'this' in arrow or setTimeout function will always point to it's parent object.
//Fins out where the arrow function is placed and what is the value of 'this' outside that.
