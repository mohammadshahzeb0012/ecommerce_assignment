const mongoose = require("mongoose")
require("dotenv").config()

const connectToDb = mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to mongodb"))
    .catch((e) => console.log("MongoDB error", e))

module.exports = connectToDb