// Async JS Programming
//Callbacks, Promises, Async & Await

const data = [
  { name: "Deep", profession: "Software Engineer" },
  { name: "Ajay", profession: "Software Engineer" }
];

function getData() {
  setTimeout(() => {
    let output = "";
    data.forEach((d, i) => {
      output += `<li>${d.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// function createData(newData) {
//   setTimeout(() => {
//     data.push(newData);
//   }, 2000);
// }

// function createData(newData, callback) {
//   setTimeout(() => {
//     data.push(newData);
//     callback(); //Here getData is getting called afte the new data is pushed
//   }, 2000);
// }

// function createData(newData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.push(newData);
//       let error = false;
//       if (!error) {
//         resolve("Everything is right");
//       } else {
//         reject("Nothing is right");
//       }
//     }, 2000);
//   });
// }

function createData(newData) {
  return new Promise((resolve, reject) => {
    //Promising to return something. Either resolved or rejected
    setTimeout(() => {
      data.push(newData);
      let error = false;
      if (!error) {
        resolve("Everything is right");
      } else {
        reject("Nothing is right");
      }
    }, 2000);
  });
}

//Our desired output will not take place as createData will take 2s and getData will take 1s to execute. So, by the time createData completes execution, getData would have already completed its execution. This happens because setTimeout is a asynhronous funciton, so it does not block execution.
// createData({ name: "Vivek", profession: "Software Engineer" });
// getData();

//There are many ways to tackle this issue.
// Way 1: Callback
// createData({ name: "Vivek", profession: "Software Engineer" }, getData);

// Way 2: Promise
// createData({ name: "Vivek", profession: "Software Engineer" }) //As Promise is being returned, we should use .then and .catch to hadle it
//   .then(res => {
//     console.log(res);
//     getData();
//   }) //resolve <-- If resolve did not have a message inside it then just pass the callback .then(getData)
//   .catch(err => console.error(err)); //reject

// Way 3: Async & Await
async function start() {
  //Due to this function being async (Asynchronous), no matter how much we will need to wait for it to execute, it will not block other codes. So, this whole function will become non-blocking.
  //Thik of asynchronous function as functions that are taken out of context once they get blocked (generally i/o, api call etc), so that the rest of the code does not get blocked and once that block is resolved, it again comes back to the context and continues its execution
  await createData({ name: "Vivek", profession: "Software Engineer" }); //The execution will wait here till the createData function execution is done. Then next lines will get executed.
  //Await works only if the function is async.
  getData(); //Once createData is executed then it will execute.
}
start();
