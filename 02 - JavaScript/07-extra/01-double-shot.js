const google = "google";
const fb = null;

if (!!google) {
  console.log("I execute - BLOCK 1");
}

if (!!fb) {
  //as fb is null so it is evaluated as falsy value
  //Many times in production,like during auth, we do not need a falsy value. We need a 100% false value
  //!falsy is evaluated as 100% true
  // !true is evaluated as 100% false value
  //So, !!fb gets evaluated as 100% false value, i.e. it becomes a boolean
  //This is the best practice when using a falsy value
  console.log("I execute - BLOCK 2");
}

/*
!!falsy --> false (Boolean)
!!truthy --> True (Boolean)
*/
