//Sahdowing
var x = 8;

const demo1 = () => {
  // x taht is inside the function will get hoisted in this scope (overriding the x outside the function/lexical scope) and assigned as undefined (until defined)
  //if there was no x declared inside this function then the x at the outer scope would have been logged until x is redifined (not declared but only redefined)
  //This is called variable shadowing.
  console.log(x); //undefined
  var x = 9;
};
demo1();

//Temporal Dead zone
let y = 8;
const demo2 = () => {
  //Here y will get hoisted but for let and const the variables do not get assigned undefined, rather they are put in a place called Temporal dead zone.
  //We can think of it like, the variable is there spiritually but it is dead.
  //So we cannot reger y till we define it.
  console.log(y); //ERROR
  let y = 9;
};
demo2();
