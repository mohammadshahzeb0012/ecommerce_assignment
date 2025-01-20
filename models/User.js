const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const userModel = mongoose.model("User", UserSchema)
module.exports = userModel