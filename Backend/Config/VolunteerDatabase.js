require("dotenv").config({ path: '../.env' });

const mongoose = require("mongoose");

const { Volunteer } = require("../Model/VolunteerSchema.js"); 

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const dummyVolunteers = [
    {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "picture": "https://example.com/profile.jpg",
        "age": 25,
        "contactNo": "1234567890",
        "address": "123 Main Street, Cityville",
        "education": [
            {
                "institution": "University of Cityville",
                "degree": "Bachelor of Science in Computer Science"
            }
        ],
        "experience": "Software Engineer at XYZ Corp",
        "Participation": 5,
        "rating": 4.5
    },
    {
        "name": "Jane Smith",
        "email": "janesmith@example.com",
        "picture": "https://example.com/profile2.jpg",
        "age": 30,
        "contactNo": "9876543210",
        "address": "456 Oak Street, Townsville",
        "education": [
            {
                "institution": "Townsville University",
                "degree": "Master of Business Administration"
            },
            {
                "institution": "Townsville College",
                "degree": "Bachelor of Arts in Marketing"
            }
        ],
        "experience": "Marketing Manager at ABC Corp",
        "Participation": 3,
        "rating": 4.0
    }
];

async function addVolunteers() {
    try {
        const maxVolunteer = await Volunteer.findOne({}, {}, { sort: { VolunteerId: -1 } }); // Corrected sorting field
        let nextVolunteerId = 1;
        if (maxVolunteer) {
            nextVolunteerId = maxVolunteer.VolunteerId + 1; // Corrected field name
        }
        const volunteersWithIds = dummyVolunteers.map((volunteer, index) => ({
            ...volunteer,
            VolunteerId: nextVolunteerId + index // Corrected field name
        }));
        await Volunteer.insertMany(volunteersWithIds);
        console.log('Volunteers added successfully!');
    } catch (error) {
        console.error('Error adding volunteers:', error);
    }
}
addVolunteers();

module.exports = { mongoose, Volunteer };
