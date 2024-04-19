const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type:String
    },
    picture: {
        type: String
    },
    age: {
        type: Number
    },
    contactNo: {
        type: String
    },
    address: {
        type: String
    },
    education: [{
        institution: {
            type: String,
        },
        degree: {
            type: String,
        }
    }],
    experience: {
        type: String
    },
    Participation: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    }
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
