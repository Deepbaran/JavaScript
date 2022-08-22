// https://api.chucknorris.io/jokes/random

//fetch gives a Promise
//This will not run in node. Need to run it in the browser.
//As this will return a Promise, there will be a delay in code execution. But it is asynchronous, so it will not block other codes.
/*
fetch("https://api.chucknorris.io/jokes/random")
  .then(response => {
    //Whatever JSON is fetched from the link will come here as response. If there is an error while fetching then catch will get executed to handle the reject error.
    //console.log(response);
    //Whenever a response body (ReadableStream) is received, we need to convert it to a JSON
    responseJson = response.json(); //converted the reponse body to json
    //As long as we have a Promise, we can use another .then() and return the Promise to it
    return responseJson;
  }) //We can create a chain of then
  .then(response => {
    //console.log(response); //If the previous response does not return anything then this response will be undefined
    return response;
  }) //Whatever the previous then returns will come here as response
  .then(response => {
    console.log(response);
  })
  .catch(); //catches reject exceptions
*/

/*
fetch("https://api.chucknorris.io/jokes/random")
  .then(response => {
    // console.log("API: ", response.json()); //response.json() is a Promise
    //Don't use + here as they will turn the Promise object to a string
    //Always check the PromiseStatus as "fulfilled" or "resolved" or request status is 200, i.e. the request was successful. Otherwise it was failure.
    //As response.json() is a Promise we can use/chain another then() to resolve it.
    return response.json(); //returning json data to the next then() in the chain
  })
  .then(data => {
    // console.log("DATA is : ", data);
    var joke = data.value;
    console.log("JOKE: ", joke);
  })
  .catch(err => {
    console.error(err);
  });
  */

fetch("https://api.chucknorris.io/jokes/random")
  .then(response => response.json())
  .then(data => {
    var joke = data.value;
    console.log("JOKE: ", joke);
  })
  .catch(err => {
    console.error(err);
  });

//try-catch
// try {

// } catch (error) {

// } finally {

// }
