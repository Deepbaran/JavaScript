//Throttling or throt function

//Real life scenario for throttling:
/*
Suppose there is a button that when clicked saves data in the database. Now assume user clicked on it and saving the data in the db is going on, and while it's processing the data, if user again clicks on the button then the data will get stored in the db twice.
To prevent this we can use throttling.
*/

//Throttling use case / concept on a search button whe debouncing is applied on the search bar.
//We will make the function call after some time once the button is clicked and will disable it till the function is executed, so that user cannot press it repeatedly.

const mythrottle = (fn, d) => {
  return function (...args) {
    document.getElementById("myid").disabled = true;
    setTimeout(() => {
      fn();
    }, d);
  };
};

const newFun = mythrottle(() => {
  document.getElementById("myid").disabled = false;
  console.log("User Clicked.!!");
}, 5000);
