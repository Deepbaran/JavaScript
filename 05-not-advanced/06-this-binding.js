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

// Borrowing the getInfo method from deep object as dj has all the other properties as dee
// We will use bind in this case.
// Using bind will make the this properties point to dj object rather than deep object
// bind will return a reference of the method where the this properties now point to dj and we need to call it
var djInfo = deep.getInfo.bind(dj);
djInfo();

//call: unlike bind which only returns the reference, it directly calls it.
deep.getInfo.call(dj);

//bind returns a reference of the method where this properties are pointing to dj object but call directly calls that method
