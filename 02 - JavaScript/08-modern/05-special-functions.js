// Map, set, WeakSet, WeakMap

"use strict"; //Run JS in strict mode <-- ES5

// set
// It contains only unique values
// Object Constructor
/*
let myArray = [1, 2, 2, 3, 4];
let obj = new Set(myArray);
console.log(obj);
obj.add(5);
console.log(obj);
obj.delete(1);
console.log(obj);
console.log(obj.size);
console.log(obj.has(1));
var obj1 = { name: "Deep" };
obj.add(obj1);
console.log(obj);

for (let n of obj) {
  console.log(n);
}

obj.forEach(e => console.log(e)); //forEach comes from the prototype of the set

obj.clear();
console.log(obj);
*/

// map -> key - values
/*
let myMap = new Map([
  ["a1", "Deep"],
  ["a2", "Kar"]
]);
console.log(myMap);
myMap.set("a3", "baran");
console.log(myMap);
myMap.delete("a2");
console.log(myMap);
console.log(myMap.get("a3"));

for (let [key, value] of myMap) {
  //First Key then Value
  console.log(`${key} : ${value}`);
}

for (let key of myMap.keys()) {
  console.log(`${key}`);
}

for (let value of myMap.values()) {
  console.log(`${value}`);
}

myMap.forEach((v, k) => console.log(`${k} ${v}`)); //First value then Key
myMap.forEach(v => console.log(`${v}`));

myMap.clear();
console.log(myMap);
*/

// WeakSet -> We can store only object but cannot iterate
// Only store Objects
// Cannot Iterate
//add
//delete
//has
/*
let ws = new WeakSet();
// ws.add(1); //Invalid value used in weak set <- We can store only object
var ob1 = { name: "Tiger" };
var ob2 = {};
ws.add(ob1);
ws.add(ob2);
console.log(ws); //ob1 an ob2 are different as they have their own memory allocated
ws.delete(ob2);
console.log(ws);
*/

//WeakMap
// Only store Objects
// Cannot Iterate
//delete
//get
//has
//set
let wm = new WeakMap();
var ob3 = {};
var ob4 = {};
wm.set(ob3, "Private");
wm.set(ob4, "Private data");
console.log(wm); //ob3 and ob4 are different as they are defined differently in the memory
console.log(wm.has(ob3));
