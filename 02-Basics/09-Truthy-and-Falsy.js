// Type Coersion -
// Truthy - The values that when put under a condition, acts as true. These are treated as True. Anything that is not Flasy is Truthy
// Falsy - The values that when put under a condition, acts as false. These are treated as false.

// Falsy Values:
// undefined
// null
// 0
// '' //Empty String
// NaN //Not a Number

// Difference between undefined and null
/*
undefined is when you forget to define a variable.
null is empty and null is an object.
*/

// Type Coersion:
console.log(2 + 2); //4 -> Number + Number = Number
console.log(2 + "2"); //22 -> Number + String = String [The 1st Number coerced it to become a String]
console.log(2 + true); //3 -> true is coerced to 1
console.log(2 + false); //3 -> true is coerced to 0
console.log("2" + true); //2true
console.log("2" + false); //2false
console.log(2 + null); //2 -> null is coerced to 0
console.log("2" + null); //2null
console.log(2 + undefined); //NaN
console.log("2" + undefined); //2undefined
console.log(null + undefined); //NaN
console.log(NaN + null); //NaN
console.log(NaN + undefined); //NaN
console.log(NaN + NaN); //NaN
console.log(NaN + 2); //NaN
console.log(NaN + "2"); //NaN2 -> NaN is coerced to become a String
console.log(null + true); //1 -> null is coerced to 0 and true is coerced to 1
console.log(null + false); //0 -> null and false are both coerced to 0
console.log(undefined + true); //NaN -> true was coerced to become 1
console.log(undefined + false); //NaN -> false was coerced to become 0
console.log(undefined + undefined); //NaN
console.log(null + null); //0 -> Both the nulls are coerced to 0
console.log(NaN + true); //NaN
console.log(NaN + false); //NaN
console.log(true + false); //1 -> true is coerced to 1 and false is coerced to 0

// == vs ===
//== Type coercion occurs in this. This compares the two sides after performing type coersion
//Loose check
if (2 == "2") {
  //Checking only the value. Not the type
  //2 is coerced to "2"
  //JS thinks we are trying to say loosely 2, whether its a number 2 or String 2, it just compares them loosely
  //It does not check the types.
  console.log("Condition is true");
}

//===
//Tight/Strict check
if (2 === "2") {
  //Checking type as well as the value.
  //Nothing is coerced here.
  //In here not only values, but the types are also checked.
  //JS will not assume anything
} else {
  console.log("Condition is false");
}
