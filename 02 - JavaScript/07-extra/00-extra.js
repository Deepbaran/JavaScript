var str1 = "a";
console.log(str1.repeat(5)); //aaaaa

var str2 = "Deep";
console.log(str2.indexOf("e")); //1
console.log(str2.includes("e")); //true
var str2Arr = str2.split("");
console.log(str2Arr); //[ 'D', 'e', 'e', 'p' ]
var str3 = str2Arr.join("");
console.log(str3); //Deep

var arr1 = [1, 2, "Deep", 3];
console.log(arr1.indexOf("Deep")); //2
console.log(arr1.includes(1)); //true
arr1.reverse();
console.log(arr1); //[ 3, 'Deep', 2, 1 ]
console.log(Array.isArray(arr1)); //true

var arr2 = Array(5).fill(0);
console.log(arr2); //[ 0, 0, 0, 0, 0 ]

var num1 = 56;
console.log(typeof num1.toString()); //string
console.log(typeof ("" + num1)); //string
console.log(Number.isInteger(num1)); //true

var str4 = "56";
console.log(typeof parseInt(str4)); //number

var str5 = "Deep";
console.log(str5.replace("D", "B")); //Beep
console.log(str5); //Deep
console.log(str5.replaceAll("e", "D")); //DDDp <-- replaceAll might not be supported everywhere

var num2 = 5;
var num3 = 8;
console.log(Math.max(num2, num3)); //8
console.log(Math.min(num2, num3)); //5

var arr3 = [1, 3, 4, 12, -1, 0, 93];
console.log(Math.max(...arr3)); //93
console.log(Math.min(...arr3)); //-1

console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324

console.log("a".charCodeAt(0)); //97

//Getters and Setters in the object
const obj = {
  firstName: "Deep",
  lastName: "Kar",
  get name() {
    //getter
    return `${this.firstName}baran ${this.lastName}`;
  },
  set name(newName) {
    //setter
    const [firstName, lastName] = newName.split(" ");
    this.firstName = `${firstName}baran`;
    this.lastName = lastName;
  }
};
console.log(obj.name); //Deepbaran Kar //getter is called
obj.name = "Deep Kar"; //setter is called
console.log(obj.name); //Deepbaranbaran Kar
