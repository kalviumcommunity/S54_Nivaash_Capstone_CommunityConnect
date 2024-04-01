const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CounterSchema = new Schema({
    _id: { type: String, required: true },
    sequence_value: { type: Number, default: 1 }
});

const Counter = mongoose.model('Counter', CounterSchema);

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
    }
});

volunteerSchema.pre('save', async function (next) {
    const volunteer = this;
    if (!volunteer.isNew) {
        return next();
    }
    try {
        const counter = await Counter.findByIdAndUpdate(
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

module.exports = { Volunteer };