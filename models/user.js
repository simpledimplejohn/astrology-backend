const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    }, 
    lname: {
        type: String,
        required: true
    }, 
    dob: {
        type: Date,
        required: true
    }, 
    lat: {
        type: Number,
        require: true
    },
    log: {
        type: Number,
        require: true
    },
    timezone: {
        type: Number,
        require: true
    }

});

const UserModel = new mongoose.model('User', UserSchema)

module.exports = UserModel