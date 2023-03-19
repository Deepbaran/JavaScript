const getInfoGeneric = function (a, b) {
  console.log(`
  First name is ${this.firstName}
  Last name is ${this.lastName}
  His role is ${this.role}
  and he is studying ${this.courseCount} courses
  `);
  console.log(`Passed parameters are ${a} & ${b}`);
};

const deep = {
  firstName: "Deep",
  lastName: "Kar",
  role: "Admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`
    First name is ${this.firstName}
    Last name is ${this.lastName}
    His role is ${this.role}
    and he is studying ${this.courseCount} courses
    `);
  }
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4
};

deep.getInfo();

//call, bind and apply are used for function borrowing

// Borrowing the getInfo method from deep object as dj has all the other properties as dee
// We will use bind in this case.
// Using bind will make the this properties point to dj object rather than deep object
// bind will return a reference of the method where the this properties now point to dj and we need to call it
var djInfo = deep.getInfo.bind(dj);
djInfo();
getInfoGeneric.bind(dj, "PassedParameter1", "PassedParameter2")();

//call: unlike bind which only returns the reference, it directly calls it.
deep.getInfo.call(dj);
//We can also call a generic function.
getInfoGeneric.call(dj, "PassedParameter1", "PassedParameter2"); //We can pass multiple parameters after the object

//bind returns a reference of the method where this properties are pointing to dj object but call directly calls that method

//apply: Same as call but the only difference is that in call we need to pass the parameters as comma separated but in apply we need to pass an array of parameters
deep.getInfo.apply(dj);
getInfoGeneric.apply(dj, ["PassedParameter1", "PassedParameter2"]);

//call, bind and apply can be applied not only on object methods but on generic functions too.
