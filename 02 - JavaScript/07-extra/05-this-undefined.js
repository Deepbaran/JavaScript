//When this is undefined, we should use the fat arrow function.
//Unless Fat Arrow function is inside a class it points to the Window object.
//Once in the class it points to the Class's object.

function check1() {
  console.log(this);
}

const check2 = () => {
  console.log(this);
};

check1(); //Window Object
check2(); //Window Object

const obj = {
  check1: function () {
    console.log(this);
  },
  check2: () => {
    console.log(this);
  }
};
obj.check1(); //obj Object
obj.check2(); //Window Object

class DelayLogger {
  constructor() {
    this.message = "hello world";
  }
  log1() {
    setTimeout(function () {
      //This function is not bound to the class because how setTimeout and asynchronous works behind the scenes.
      console.log(this.message);
    }, 1000);
  }
  log2() {
    setTimeout(() => {
      //Fat arrow function binds the outside scope with this keyword
      console.log(this.message);
    }, 1000);
  }
}
const logger = new DelayLogger();
logger.log1(); //undefined
logger.log2(); //hello world
