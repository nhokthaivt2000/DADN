const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/LoginSignUpTutorial")
    .then(() => {
        console.log('mongoose connected');
    })
    .catch((e) => {
        console.log('failed');
    })

const logInSchema = new mongoose.Schema({
    _User: String,
    _Password: String,
    _Phone: String
})

const LogInCollection = new mongoose.model('LogInCollection', logInSchema)

module.exports = LogInCollection
