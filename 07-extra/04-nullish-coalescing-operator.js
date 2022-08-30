// Short Circuiting
// Nullish Coalescing Operator (??)

//When we use OR operator (||), if the first condition is evaluated as true/truthy, we do not check the 2nd operator. So, the condition gets short circuited there.
//If first condition gets evaluated to false/falsy, the condition does not get short-circuited there and evaluates the 2nd value too.
// If all are evaluated as falsy then the last one gets logged.

let a = 5;
let b = 0;
console.log(a || b); //5 <-- As a is truthy, we will not check the condition for b which is falsy. So, it gets short circuited at a.
console.log(b || a); //5 <-- a got evaluated. As b is falsy, the condition does not get short circuited there. But when it reaches a, which is a truthy value, the condition gets short-circuited.

console.log(0 || null || undefined || NaN || 99); //99
console.log(0 || null || undefined || NaN); // NaN <-- As all are evaluated as falsy, so the last, NaN gets logged.

//Short-circuiting is used when we need to get a default value.
//Suppose we are waiting for some value, but it comes as falsy, we can use short-circuiting to set a default value.

const returnMeTheNumber = number => {
  // return number || -1;
  return number ?? -1;
};
console.log(returnMeTheNumber(2)); //2
console.log(returnMeTheNumber()); //-1
//Sometimes we want to take falsy values and create a short circuit in the condition.
//For this we use nulish coalescing operator (??)
//?? operator evaluates 0, '', NaN as truthy in the overall condition even if they are falsy.
//falsy values are not false values, they are treated as false.
//falsy: 0, '', NaN, undefined, null
console.log(returnMeTheNumber(0)); //0 <-- 0 got treated as truthy value because of ?? operator

//We canot use both || and ?? in a condition
console.log(null || undefined || 0 || "" || NaN || 75); //75
console.log(null ?? undefined ?? 0 ?? "" ?? NaN ?? 75); //0
