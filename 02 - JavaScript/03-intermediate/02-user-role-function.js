/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - woth access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/

//fuction with default parameter
// function getUserRole(name, role = "other") {
//   switch (role) {
//     case "admin":
//       return `${name} is admin with all access`;
//     case "subadmin":
//       return `${name} is sub-admin with access to create/delete courses`;
//     case "testprep":
//       return `${name} is testprep with access to create/delete tests`;
//     case "user":
//       return `${name} can consume all content`;
//     default:
//       return `${name} is trial user`;
//   }
// }

// Storing a function inside a variable.
var getUserRole = function (name, role = "other") {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
    case "subadmin":
      return `${name} is sub-admin with access to create/delete courses`;
    case "testprep":
      return `${name} is testprep with access to create/delete tests`;
    case "user":
      return `${name} can consume all content`;
    default:
      return `${name} is trial user`;
  }
};

console.log(getUserRole("Deep")); //Deep is trial user

msg = getUserRole("sammy", "user");
console.log(msg);

console.log(typeof getUserRole); //function
