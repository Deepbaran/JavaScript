// Obect Literals - object literal is a comma-separated list of name-value pairs inside of curly braces. Those values can be properties and functions.
var user = {
  //key-value pairs
  //key: property / function
  firstName: "Deepbaran",
  lastName: "Kar",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true
};

console.log(user.firstName);
console.log(user["lastName"]); //This is useful if the key have multiple words

user.loginCount = 44;
console.log(user.loginCount);

user.googleSignedIn = false; //Added a new property called googleSignedIn to the object
console.log(user);
/*
{
  firstName: 'Deepbaran',
  lastName: 'Kar',
  role: 'Admin',
  loginCount: 44,
  facebookSignedIn: true,
  googleSignedIn: false
}
*/

console.table(user); //log user in a table
