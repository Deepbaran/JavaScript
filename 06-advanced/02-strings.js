// Template Literals - `` <-- These are known as Interpolation too
// String Literals - "" / ''

var name = `'Deep'"baran"`;
console.log(name); //'Deep'"baran"
var lastName = "'\"Kar\"'";
console.log(lastName); //'"Kar"'

var fullName = `${name} Kar`;
console.log(fullName);
console.log(fullName.charAt(0));
console.log(fullName.endsWith("?"));
console.log(fullName.includes("Deep"));
console.log(fullName.indexOf("e"));
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.length);
/*
'Deep'"baran" Kar
'
false
true
2
'deep'"baran" kar
'DEEP'"BARAN" KAR
17
*/
