// Create an application with following roles:
// admin - get full access
// subadmin - gets acess to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content

var user = "testprep";

// switch-case
switch (user) {
  case "admin":
    console.log("You get full access");
    //break allows us to not to have a fall through.
    //fall through means even after getting the correct case, the cases after that will also get executed as we are not breaking out of the switch statement.
    break;
  case "subadmin":
    console.log("gets acess to create/delete courses");
    break;
  case "testprep":
    console.log("gets access to create/delete tests");
    break;
  case "user":
    console.log("gets access to consume content");
    break;
  default:
    //Run this if no case is matches the switch key
    console.log("Trial user");
    break;
}
