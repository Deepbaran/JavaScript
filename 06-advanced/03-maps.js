// Hashmaps
var myMap = new Map();

myMap.set(1, "uno");
myMap.set(2, "dos");
myMap.set(3, "tres");
myMap.set(4, "cuatro");

console.log(myMap); //Map(4) { 1 => 'uno', 2 => 'dos', 3 => 'tres', 4 => 'cuatro' }
console.log(myMap.size); //4

console.log(myMap.keys()); //[Map Iterator] { 1, 2, 3, 4 }
for (let key of myMap.keys()) {
  console.log(`Key: ${key} || Value: ${myMap.get(key)}`);
  /*
    Key: 1 || Value: uno
    Key: 2 || Value: dos
    Key: 3 || Value: tres
    Key: 4 || Value: cuatro
   */
}

for (let value of myMap.values()) {
  console.log(`Value: ${value}`);
  /*
    Value: uno
    Value: dos
    Value: tres
    Value: cuatro
   */
}

for (let [key, value] of myMap) {
  console.log(`Key: ${key} || Value: ${value}`);
  /*
    Key: 1 || Value: uno
    Key: 2 || Value: dos
    Key: 3 || Value: tres
    Key: 4 || Value: cuatro
   */
}

myMap.forEach(value => console.log(`Value: ${value}`));
/*
Value: uno
Value: dos
Value: tres
Value: cuatro
*/

myMap.forEach((value, key) => console.log(`Key: ${key} || Value: ${value}`));
/*
Key: 1 || Value: uno
Key: 2 || Value: dos
Key: 3 || Value: tres        
Key: 4 || Value: cuatro 
*/

myMap.delete(2);
console.log(myMap); //Map(3) { 1 => 'uno', 3 => 'tres', 4 => 'cuatro' }
