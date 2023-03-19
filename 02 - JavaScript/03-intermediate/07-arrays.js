// Array is a collection of data
// We can store multipe datatypes in a single Array but this is not a good data structure

var Countries = ["India", "USA", "Japan", "Russia"];

var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

console.log(states);
console.log(states[0]);
console.log(states.length); //4
console.log(typeof states); //object

states[0] = "Punjab";
console.log(states[0]);

var user = ["Deep", "deep123@gmail.com", 3, 34, true];
console.log(user);

// Remove the last element
var removed = user.pop(); //We can pass a vlue to pop to remove a value at a particualr place
console.log(user);
console.log(removed); // true

// Add at the end
user.push("PUSHED VALUE");
console.log(user);

//Add at the first: O(N)
user.unshift("NEW VALUE");
console.log(user);

// Remove the first element: O(N)
user.shift();
console.log(user);

// Find the index of an element in Array: O(NlogN)
console.log(user.indexOf(3)); // 2 <- If value is not in array then -1 is returned.
console.log(user.indexOf(1)); // -1 <- Element 1 is not in the array

// String or any iterable to Array and Array to String
console.log(Array.from("Deep"));
console.log(Array.from("Deep").toString());

// Reverse an array
console.log(user.reverse());

// Sorting an array:
// Number Array
var nArray = [2, 4, 1, 5];
console.log(nArray.sort()); //sort array does in-place sort and returns the sorted array

// Lexicographical Sort is different

// Swap using array
var a = "a";
var b = "b";
[a, b] = [b, a];
console.log(`a: ${a} || b: ${b}`);
