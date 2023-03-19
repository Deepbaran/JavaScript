//this is window object if it is called or invoked directly or normally
//this is the object inside which it is getting called if the function is not invoked directly or normally

const obj = {
  myFunction() {
    console.log(this); //window object
    console.log(this == window); //true/false <-- Depends on how it was called. for node, use global instead of window
  },

  myFunction3() {
    console.log(this); //obj
    function myFunction4() {
      console.log(this); //window
    }
    myFunction4(); //Here this will be window object as it is a normal function call
  }
};

const test1 = obj.myFunction; //Extracting the myFunction from obj to call it normally or directly
test1(); //window object <-- As this is a normal function call
obj.myFunction(); //obj object <-- As this is not a normal function call
obj.myFunction3(); //obj object <-- As this is not a normal function call. But the this in myFunction4 will be window object as that is a normal function call.

//NOTE: The new keyword makes this point to the function object rather than the window object. new changes the behavior of this
//When you use new keyword:
//1. an object is created pointing to the constructor function
//2. this inside that particular function points to the new object.
function myFunction2() {
  return this;
}
const msg = myFunction2(); //this points to the window object
console.log(msg);

const myObj = new myFunction2(); //Because of the new keyword this will point to the myFunction2 object
console.log(myObj); //myFunction2 {} <-- myFunction2 object
myObj.a = 100;
console.log(myObj); //myFunction2 {a: 100}
