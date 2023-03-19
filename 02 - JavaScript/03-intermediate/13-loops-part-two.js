const myStates = [
  "Rajasthan",
  "Delhi",
  "Assam",
  1947,
  "Tamil Nadu",
  "Maharashtra"
];

// forEach loop is not considered as a loop, rather it is considered as a method under array
// forEach is a callback function (Takes a reference of another function or arrow function as a parameter to execute it inside its body)
myStates.forEach(e => console.log(e));
myStates.forEach((e, i) => console.log(e, i)); //element and index
