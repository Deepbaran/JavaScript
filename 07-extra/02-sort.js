// The sort function sorts the arrays in-place and returns the sorted array.
// Before sorting the elements are converted to strings (even numbers), then sorted lexicographically
// To customize the sort method pass a callback to it.

function mySort(a, b) {
  if (a > b) {
    return 1; //swap
  } else if (a < b) {
    return -1; //do not swap
  } else {
    return 0; //leave it as it is
  }
}

var sorted1 = [6, -2, 2, -7].sort();
var sorted2 = [6, -2, 2, -7].sort(mySort);

console.log(sorted1); //[ -2, -7, 2, 6 ] <- Lexicographically sorted after the elements were converted to numbers
console.log(sorted2); //[ -7, -2, 2, 6 ]

var sorted3 = [6, -2, 2, -7].sort((a, b) => a - b);
/*
a - b = 1 : swap
a - b = -1 : do not swap
a - b = 0 : leave it as it is 
*/
console.log(sorted3); //[ -7, -2, 2, 6 ]
