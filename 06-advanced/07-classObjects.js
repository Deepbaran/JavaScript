// import User from "./06-classjs"; //ES5 style

const User = require("./06-classjs"); //Not ES5

const deep = new User("Deep", "d@gmail.com");
console.log(deep); //User { courseList: [], name: 'Deep', email: 'd@gmail.com' }

console.log(deep.getInfo()); //{ name: 'Deep', email: 'd@gmail.com' }

deep.enrollCourse("React Bootcamp");
deep.enrollCourse("Angular Bootcamp");
console.log(deep.getCourseList()); //[ 'React Bootcamp', 'Angular Bootcamp' ]

let courses = deep.getCourseList();

courses.forEach(c => console.log(c));
//React Bootcamp
//Angular Bootcamp
