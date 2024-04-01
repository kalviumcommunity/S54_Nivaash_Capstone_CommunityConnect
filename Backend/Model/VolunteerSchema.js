const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CounterSchema = new Schema({
    _id: { type: String, required: true },
    sequence_value: { type: Number, default: 1 }
});

const VolunteerCounter = mongoose.model('VolunteerCounter', CounterSchema); // Modified model name

const volunteerSchema = new Schema({
    VolunteerId: {
        type: Number,
        unique: true
    },
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

volunteerSchema.pre('save', async function (next) {
    const volunteer = this;
    if (!volunteer.isNew) {
        return next();
    }
    try {
        const counter = await VolunteerCounter.findByIdAndUpdate(
            'volunteerId',
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        volunteer.VolunteerId = counter.sequence_value;
        next();
    } catch (error) {
        console.error('Error in Counter.findByIdAndUpdate:', error); 
        return next(error);
    }
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = { Volunteer, VolunteerCounter }; 
