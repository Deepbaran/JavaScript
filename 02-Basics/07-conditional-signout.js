// Show user a signout button if he is authenticated,
// otherwise show him option to Login/Signup

var authenticated = true;

// if (authenticated) {
//   console.log("Show signout button");
// } else {
//   console.log("Show login option");
// }

// Ternary Operator
console.log(authenticated ? "Signout Button" : "Login Button");
authenticated ? console.log("Signout Button") : console.log("Login Button");
