//Whatever data is on the RHS should be on the LHS and then we can do the destructuring

//Destructuring the array
const user = ["Deep", 3, "admin"];

var [name, courseCount, role] = user;
console.log(name); //Deep
console.log(courseCount); //3
console.log(role); //admin

//Destructuring the object
const MyUser = {
  myName: "Deep",
  myCourseCount: 5,
  myRole: "admin"
};

const { myName, myCourseCount, myRole } = MyUser; //We are doing destructuring of data
console.log(myName); //Deep
console.log(myCourseCount); //5
console.log(myRole); //admin

/*
In order to destrucuture a object:
1. The type of both side should match
2. The object should be on the RHS
3. The names of the destructured variables and the object properties should have the same names.

const { name, courseCount, role } = MyUser;
will give an error as the destructured variables and the object properties do not have same names.
This should be like this:
const { myName, myCourseCount, myRole } = MyUser;
This will work as the destructured variables and the object properties have same names.
*/
