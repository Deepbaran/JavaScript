// Spread and Rest operator: ...
// This operator changes to either spread operator or the rest operator depending on the challenge that we are facing
//These are ES6 concepts

//Spread operator turns a group of data into individual datas
//Rest operator turns individual datas into an array

////////////////////////////////////////////////////////////////////////////////////////////////
// Spread Operator : Do not want to change the function definition

var returnedValue = Math.max(2, 5, 7, 4, 2, 9, 8);
console.log(returnedValue); //9

var myObj = {};
Object.assign(myObj, { a: 1, b: 2, c: 3 }, { z: 9, y: 8, x: 7 });
console.log(myObj); //{ a: 1, b: 2, c: 3, z: 9, y: 8, x: 7 }

function someOne(a, b) {
  return a + b;
}
var myA = [5, 4];
console.log(someOne(myA)); // 5,4undefined <-- It printed the array elements as it is and then added undefined. As according to the function, the first parameter is the array and the 2nd parameter is undefined
console.log(someOne(5, 4, 1)); //9 <-- 1 will be ignored as the function takes two parameters and not 3. So, anything that the function do not understand will get ignored

// When the function expects individual value but we send a packed value like an array or object, in that case if we do not want to change the function definitation, we can use the spread operator (it will spread the packed/group data into multiple values)
var myB = [5, 4, 1];
console.log(...myB); //5 4 1 <-- Spread Opearator is used
console.log(someOne(...myB)); //9 <- The 3rd value 1 is ignored as the funcion only takes 2 parameters so it will ignore the third one.

////////////////////////////////////////////////////////////////////////////////////////////////
// Rest Operator : accept as many arguments as possible
function sumTwo(a, ...args) {
  //This function will definitely take one argument and any argument after that will go to args
  //Always expect that args will be an array
  //Even if it is not an array that was passed, once passed it will turn to a array called args.
  console.log(args); //[ 2, 3, 4, 5 ]
  let sum = Number(a);
  for (const arg of args) {
    sum += arg;
  }
  return [a, sum]; //Returning multiple values from a function
}
console.log(sumTwo(1, 2, 3, 4, 5)); //[1, 15] <-- 1 will be assigned to a and rest of them will be assigned to args as an array

//So Rest operator converts individual values into an array

///////////////////////////////////////////////////////////////////////////////////////////////
// Spread and Rest both work on Arrays as well as Object

//Exampe Rest
function addNumbers(...args) {
  console.log(arguments); //[Arguments] { '0': 2, '1': 4, '2': 5 } <-- This is ES5 way of getting all the arguments passed to the function
}
const res = addNumbers(2, 4, 5);
console.log(res);

//Example Spread
var names = ["Deep", "Baran", "Kar"];

function getNames(name1, name2, name3) {
  console.log(name1, name2, name3);
}
getNames(names[0], names[1], names[2]); //Deep Baran Kar
getNames(...names); //Deep Baran Kar
getNames(names); //[ 'Deep', 'Baran', 'Kar' ] undefined undefined

//With Object
//Rest
var students = {
  name: "Deep",
  age: "24",
  hobbies: ["reading", "Listening to Music"]
};
// const age = students.age;
const { age, ...args } = students; //De-structuring with Rest
console.log(age); //24
console.log(args); //{ name: 'Deep', hobbies: [ 'reading', 'Listening to Music' ] }

//Spread
var newStudent = {
  ...students,
  age: "25" //overwrote the age value in students object
};
console.log(newStudent); //Copied the values in students object to newStudent and overwrote age
