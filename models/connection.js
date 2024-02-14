require("dotenv").config();

// we need to install the mongoose package because mongoose, the package is needed when we want to CRUD into our mongo db.
// we need make sure we connect to mongo db using our environment variable and the mongoose.connect method

const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)

module.exports = mongoose;