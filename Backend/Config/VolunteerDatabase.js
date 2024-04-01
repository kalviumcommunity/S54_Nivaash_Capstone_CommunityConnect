require("dotenv").config({ path: '../.env' });

const mongoose = require("mongoose");





mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const dummyVolunteers = [
    {
        name: "John Doe",
        email: "john@example.com",
        picture: "https://example.com/johndoe.jpg",
        age: 30,
        contactNo: "1234567890",
        address: "123 Main St, City, Country",
        education: [
            {
                institution: "University of XYZ",
                degree: "Bachelor of Science in Engineering"
            },
            {
                institution: "ABC College",
                degree: "Master of Business Administration"
            }
        ],
        experience: "5 years of volunteering experience in community outreach programs."
    },
    {
        name: "Jane Smith",
        email: "jane@example.com",
        picture: "https://example.com/janesmith.jpg",
        age: 25,
        contactNo: "9876543210",
        address: "456 Elm St, City, Country",
        education: [
            {
                institution: "PQR Institute",
                degree: "Bachelor of Arts in Psychology"
            }
        ],
        experience: "2 years of volunteering experience in tutoring underprivileged children."
    }
];

async function addVolunteers() {
    try {
        const maxVolunteer = await Volunteer.findOne({}, {}, { sort: { volunteerId: -1 } });
        let nextVolunteerId = 1;
        if (maxVolunteer) {
            nextVolunteerId = maxVolunteer.volunteerId + 1;
        }
        const volunteersWithIds = dummyVolunteers.map((volunteer, index) => ({
            ...volunteer,
            volunteerId: nextVolunteerId + index
        }));
        await Volunteer.insertMany(volunteersWithIds);
        console.log('Volunteers added successfully!');
    } catch (error) {
        console.error('Error adding volunteers:', error);
    }
}
addVolunteers();

module.exports = { mongoose, Volunteer };