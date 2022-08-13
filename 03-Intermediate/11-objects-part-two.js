var user = {
  firstName: "Deepbaran",
  lastName: "Kar",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    //Inside a object, this represents the user object
    //So, this.courseList is same as user.courseList
    if (
      this.courseList.length !== 0 &&
      this.courseList.indexOf(courseName) !== -1
    ) {
      //checking user is not buying the same course twice
      this.courseList.push(courseName);
    } else {
      //If no course was purchased
      this.courseList.push(courseName);
    }
  },
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
  info: function () {
    var msg = this.facebookSignedIn ? "Yes" : "No";
    return `
      First Name: ${this.firstName}
      Last Name: ${this.lastName}
      Signed in using Facebook: ${msg}
      Courses Enrolled in: ${this.courseList}
    `;
  }
};

user.buyCourse;
// var courseCountFunc = user.getCourseCount; //storing the refernce of the user.getCourseCount method
// console.log(courseCountFunc);
// console.log(courseCountFunc()); //calling the user.getCourseCount method

// var courseCountFunc = user.getCourseCount;
// courseCountFunc();
// The above two lines can be summarised as user.getCourseCount()

user.buyCourse("React JS Course");
user.buyCourse("Angular Course");
console.log(user.getCourseCount());

console.log(user.info());
/*
First Name: Deepbaran
Last Name: Kar
Signed in using Facebook: Yes
Courses Enrolled in: React JS Course,Angular Course
*/

console.log(user);
/*
{
  firstName: 'Deepbaran',
  lastName: 'Kar',
  role: 'Admin',
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [ 'React JS Course', 'Angular Course' ],
  buyCourse: [Function: buyCourse],
  getCourseCount: [Function: getCourseCount],
  info: [Function: info]
}
*/
