var testArray = [2, 4, 6, 3, 1, 5, 9, 8];
// console.log(testArray.fill(0)); //fill fills the array with 0 (with the element)
// console.log(testArray.fill("h", 2)); //fills the elements starting from 2 to end with h
console.log(testArray.fill("h", 2, 5)); //fills the elements starting from 2nd to (5-1)th elements with h

const myNumber = [23, 2, 25, 55, 66, 77, 87, 98];
// filter returns a new array and takes a callback
const result = myNumber.filter(num => num < 55); // filter filters out the element from the array that do not pass the test that is passed to filter function as a callback (function reference or arrow function) and only keeps those elements that passed the test.
console.log(result); // [ 23, 2, 25 ]

// Whenever we are passing a range, the starting value will be always inclusive and the end value will be exclusive. i.e. (m, n) means, mth to (n-1)th

var users = ["Ted", "Tim", "Ton", "Sam", "Sor", "Sod"];
// Slicing
console.log(users.slice(1, 3)); //[ 'Tim', 'Ton' ]
console.log(users.slice(1)); //[ 'Tim', 'Ton', 'Sam', 'Sor', 'Sod' ]

// Splicing(startIndex, count, elem1, elem2, el...) <- We can put as many elem as we want
console.log(users); //[ 'Ted', 'Tim', 'Ton', 'Sam', 'Sor', 'Sod' ]

// console.log(users.splice(1, 3, "HI")); //[ 'Tim', 'Ton', 'Sam' ] <- Starting from 1st element, total of 3 elements are replaced by only a HI element in the original array and the elements that were replaced are returned
// console.log(users); //[ 'Ted', 'HI', 'Sor', 'Sod' ]

console.log(users.splice(1, 3, "HI", "BYE")); //[ 'Tim', 'Ton', 'Sam' ]
console.log(users); //[ 'Ted', 'HI', 'BYE', 'Sor', 'Sod' ]
