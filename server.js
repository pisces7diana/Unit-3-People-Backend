/** EXPRESS APP */

// import Dependencies

require("dotenv").config(); // get .env variables
const express = require("express") // import express
const morgan = require("morgan");
const cors = require("cors");
// because our application will be running on 2 different servers we will need to account for CORS errors. If we install the cors package and use it in our application, we will no longer need to worry about CORS errors.
// npm install cors in our terminal.
// then in our server.js
// the CORS package is a middle ware package it must be above the routes.

const PeopleRouter = require("./controllers/people")
const app = express(); // create application object


/**
 * Middleware
 */
app.use(morgan("dev"));
app.use(cors());
app.use(express.json()) //this middleware allows us to send JSON request with our request

/**
 * Routes
 */
app.use("/people", PeopleRouter)

app.get("/", (req, res) => {
    res.send("hello world");
  });




const PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));