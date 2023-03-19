const uid = "abc123";

var fullName = "Deepbaran Kar";
var email = "deep@gmail.com";
var password = "12345";
var confirmPassword = "123456";
var courseCount = 0;
var isLoggedInfromGoogle = false;

//user input
//Web page
// alert()
//prompt("Enter your name");

//output
console.log(uid);
console.log("Full Name is: " + fullName);
// console.log("Full Name is: ", fullName);
console.log(email);

//Template literals - Used for Interpolation
console.log(`
  With Unique ID: ${uid}
  User is: ${fullName}
  and his email is: ${email}
  and uses the password: ${password}
`);
