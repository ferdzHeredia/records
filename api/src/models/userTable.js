const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Phone: String,
    Country: String,
    Destination: String,
    VacationInterest: String,
    NumberOfNights: Number,
    Rooms: Number,
    Adults: Number,
    Children: Number,
    CommentsOrQuestions: String,



})

module.exports = mongoose.model('user_data', UserSchema)