const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Phone: String,

})

module.exports = mongoose.model('user_data', UserSchema)