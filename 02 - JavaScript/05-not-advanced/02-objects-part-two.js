var User = {
  name: "",
  getUserName: function () {
    console.log(`User name is ${this.name}`);
  }
};

// Creating a object using a prototype (this is not the prototype property of the objects but the blueprint following which other objects will be created) of the object
var deep = Object.create(User); //prototype
// All the objects created using this syntax will have a prototype of User (This defines the prototype of the objects)
// All the objects created will have __proto__ when run in browser.
// When running in node although it shows empty, it can still access the properties.
console.log(deep);
deep.name = "Deep";
deep.getUserName();

var sam = Object.create(User, {
  name: { value: "Sammy" },
  courseCount: { value: 3 }
}); //Assiginig values to attributes and adding more attributes to the prototype
sam.getUserName();

var obj = {
  name: "Deep",
  lastName: "Kar"
};
console.log(Object.keys(obj));
console.log(Object.values(obj));
