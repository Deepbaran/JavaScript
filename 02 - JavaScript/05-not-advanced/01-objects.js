// When objects are defined they have some properties attached to them and when we define some method inside them they also have some properties attached to them. These are known as prototype properties.

// Functional way of defining/creating a Object [Recommended]
var User = function (firstName, courseCount) {
  //This is a functional object
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course count is ${this.courseCount}`);
  };
};

// Adding features/properties to functional object that is accessible to all the instances of the object
// All the Objects have access to something called __proto__ | If we see it in the browser.
// In order to access it in a programmatic way, we will need to use the prototype prperty of the functional object.
// Using prototype we can add more properties, functions, getters, setters, anything we want.
// prototype is used to inject extra things to the functional object or overwrite things that are already in __proto__

// Injecting a function from outside to the Object | This is now available to all the instances of the object | This will be added to __proto__
User.prototype.getFirstName = function () {
  // As this is a function stored inside a varaible so, if it is called before getting defined, it will throw an error saying that it is not a function as the function is still not assigned to it.
  console.log(`Your firstname is : ${this.firstName}`);
  //If this.firstName is not present in the object then it will just give undefined and this is bad, becuase it can mean multiple things and is hard to debug:
  // 1. The property was never set
  // 2. The property does not exist
  // 3. The property was never injected nicely
  // 4. And many more
  // So write code that checks out all of this.
  // We can take care of it by checking if the Object has the proprty or not before accessing it through the instances.
  // We do this by using the hasOwnProperty inside __proto__
  // ALWAYS DO THE CHECKING
};

//Whenever there is a constructor, new keyword is involved.
// var deep = User("Deep", 2); //undefined
// Without the new keyword it becomes undefined because,
// without new keyword, User() is a normal function call so this points to window object and
// window object does not have the firstName, courseCount and getCourseCount.

//Creating object from the functional Object
var deep = new User("Deep", 2);
var sam = new User("Sam", 1);
//Two separate instances of the same object is created or Two copies of User are created.

// console.log(deep);
// console.log(sam);

// new keyword is responsible for the functional object syntax
// It is responsible for invoking the constructor and creating a new instance every single time.
// Everytime new keyword is used, a User copy will be created.
// new keyword does three things:
// 1. Create a new copy/new instance of the functional object
// 2. Makes this point to the functional object rather than window object.
// 3. Find all the prototypes that are defined and inject them in the instances accordingly.

deep.getCourseCount(); //Course count is 2
//Check if this.firstName exists in deep, so that getFirstName() does not give unknown
if (deep.hasOwnProperty("firstName")) {
  deep.getFirstName(); //Your firstname is : Deep
}
sam.getCourseCount(); //Course count is 1
if (sam.hasOwnProperty("firstName")) {
  sam.getFirstName(); //Your firstname is : Sam
}

// prototype is a property of a Function object. It is the prototype of objects constructed by that function. __proto__ is an internal property of an object, pointing to its prototype.

// As everyting in JS is an Object, we can use the __proto__ for Array, function and Objects.

// Prototype Chaining or Object Chaining: Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
