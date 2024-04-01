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
    picture: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    education: [{
        institution: {
            type: String,
            required: true
        },
        degree: {
            type: String,
            required: true
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
