import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3006/"
});

//This is our axios base file.
//This will stop axios from making calls to the server everytime it fetched data.
//Making connection to the server is a performance costly job.
