//Classes are like blueprints where we define how something should be defined
// Classes have a default constructor and once we crate a constructor, that constructor gets deleted.
class User {
  constructor(name, email) {
    this.name = name; //No need to explicitly define the this variables outside the constructor if they are getting initialized inside the constructor. Otherwise we need to define them outside.
    this.email = email;
  }

  // This is a class attribute
  #courseList = []; //# is used to create private properties (props) in a class
  //Once a prop is defined private with # we will need to use # before the prop name to access it inside the class

  //This a class method
  getInfo() {
    return { name: this.name, email: this.email }; //Here this points to the User object
  }

  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCourseList() {
    return this.#courseList;
  }

  // //static props cannot be inherited
  // static login() {
  //   //Static props belong to the class and not the Object
  //   return "You are logged in";
  // }

  login() {
    return "You are logged in";
  }
}

class SubAdmin extends User {
  //Child class cannot inherit private and static props
  constructor(name, email) {
    super(name, email);
  }

  getAdminInfo() {
    return "I am subadmin";
  }

  //Overriding the login method
  login() {
    return "Login for admin only";
  }
}

//exporting this class for it to be imported to a different file
module.exports = User; //Not ES5

// export default User; //ES5 style

const rock = new User("rock", "rock @rock.com");
console.log(rock.getInfo());
rock.enrollCourse("Angular Bootcamp");
console.log(rock.getCourseList());
console.log(rock.courseList); //undefined

const tom = new SubAdmin();
console.log(tom.getAdminInfo()); //I am subadmin
console.log(tom.login()); //Login for admin only
console.log(tom.getInfo()); //{ name: undefined, email: undefined }

const jerry = new SubAdmin("Jerry", "j@jerry.com");
console.log(jerry.getInfo()); //{ name: 'Jerry', email: 'j@jerry.com' }
console.log(jerry.courseList); //undefined <-- Did not inherit private prop
