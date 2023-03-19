//We use optional chaining when accessing a method or property in a property in an object so that if that property is not in the object, then it will not throw an  error.

const obj = {
  name: "Deep"
};

console.log(obj.name);
console.log(obj.age); //undefined
// console.log(obj.age.value); //TypeError: Cannot read properties of undefined (reading 'value')
//Using optional chaining to handle this error
console.log(obj.age?.value); //undefined
