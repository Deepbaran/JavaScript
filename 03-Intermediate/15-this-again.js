// this keyword creates confusion. It confuses whether it contains the Window object or the Object I have defined.
// For all REGULAR FUNCTION CALLS, this points to window object or the global object.
// EXCEPTION: In object if the function is an arrow function, then this will point to the window object and not the object it is defined in.

console.log(this); //Gives window or Global object

var user = {
  firstName: "Deep",
  courseCount: 4,
  getCoursent: function () {
    //This is not a regular function
    console.log("LINE 7", this); //Gives the user object
    function sayHello() {
      //This is a regular function
      console.log("Hello");
      console.log("LINE 10", this); //Gives the window or Global object
    }
    sayHello(); //This is a regular function call
    return this.courseCount;
  }
};

user.getCoursent(); //This is not a regular function call as we are calling it through the user object. This is a object function call.

function sayHello() {
  console.log("Hello");
}
sayHello(); //This is regular function call
