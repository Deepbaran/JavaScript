// Prototype Inheritance - In JS everything (function, object, array, etc) is derived from Object. Meaning, everything is using Object prototype.

// [[Prototype]]: Object <- This tells us what type object the current object was derived from. Object is derived from null type object

// __proto__ <- This is the object from which the current object was derived from. Cahnging the object in __proto__ means that we are changing the object from which current object was derived from. But this is not an issue as all the objects are derived from Object at the end according to prototype chaining.

//The derived object inherits all properties from its parent object.

//hasOwnProperty that Object provides to its derived objects to check if they themselves have the property and that property is not an inherited one.

// When we log an oject, it gives us some properties. And these are properties are inside Object. These are called Prototypes.

//Basically, as everything is derived from Object, that means everything inherits some properties from Object. These properties are called Prototypes.

//Prototype is not constrained to only Object. If object A is derived from object B, then object A will inherit the properties of object B. These properties are Prototype of object A. And object B is derived from Object, so it will inherit the properties from Object. So, A will also inherit the properties from Object through object B.

//Prototype Chaining - We can drill down the Prototypes of objects to see from which object they are derived and what properties they inherited from them. And if we keep drilling down then we will found from which its parent was derived from and what properties it inherited and if we keep doing this then at the end we will see that Prototype is null, that means we reached the ancestor of all of these derived objects. This is called Prototype chaining.

//Generally the Prototype of Object is null as all objects are derived from it.

// Ways to create Objects in JavaScript
/*
const obj1 = new Object({
  name: "Deep"
});

const obj2 = new obj();

const obj3 = {
  name: "Deep"
};
*/

// Object -> obj -> obj2 -> obj3

const obj = {
  name: "Deep",
  // roll: 2,
  getName: function () {
    console.log(this);
    return this.name;
  },
  getRoll: function () {
    return this.roll;
  }
};
console.log(obj);

const obj2 = {
  roll: 1,
  // nmae: "Vivek",
  __proto__: obj //This will make obj2 a derived object of obj
};

console.log(obj2.__proto__.name);
console.log(obj2.name);
console.log(obj2.__proto__.roll);
console.log(obj2.roll);
console.log(obj2.__proto__.getName()); //Deep <- As obj2 does not have the name property, so it will serch it's parent objects till it fincds the name property. If it had the name property then that would get printed. Because in __proto__.getName() this is pointing to obj2 and not obj.
console.log(obj2.getName()); //Even if we are using prototype, first it will check in the object itself if it has the property then it will check in the prototype chain

console.log(obj.getRoll()); //undefined
console.log(obj2.getRoll()); //1 <- Inherited getRoll() from obj

const obj3 = {
  class: "MCA",
  __proto__: obj2 //This will make obj3 a derived object of ob2. i.e. obj3 inherits obj2
};
console.log(obj3);

const arr = ["Deep"]; //Array also has prototype as they are also inherited from Array Object.
//All inbuilt array functions come from prototype
console.log(arr);

const object = new Object();
console.log(object);

const array = new Array();
console.log(array);

const fun = new Function(); //functions are derived from Function Object
console.log(fun);

// Array and Function objects themselves are derived from Object

//Polyfill - A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

// USe the prototype property/keyword we can overwrite or add any property in the __proto__ of a object

//To write a polyfill of a function in array we need to overwrite them.
// As they are in the __proto__ of the Array object, we need to use the prototype keyword to overwrite them
//Adding the show method in Array
Array.prototype.show = function () {
  return this;
};
//Overwriting the length (property) method in Array
Array.prototype.length = 2;
//Adding a new method that converts arrays to objects.
Array.prototype.converIntoObject = function () {
  let newObj = {};
  this.forEach(e => {
    newObj[e] = e;
  });
  return newObj;
};

const cities = ["Delhi"];
console.log(cities.show());
console.log(cities.length);
console.log(cities.converIntoObject);

//Creating our own Prototype
// This is the constructor
function MyPrototype(name) {
  this.name = name;
}

MyPrototype.prototype = obj; //Now MyPrototype inherits obj

const myproto = new MyPrototype("Deep1"); //myproto is now an object of MyPrototype. MyPrototype is working as a constructor.
console.log(myproto);
console.log(myproto.getName()); //Deep1 <- Now this is pointing to myproto object
console.log(myproto.getRoll()); //undefined <- As there is no roll in myproto or anywhere in the prototype chain
