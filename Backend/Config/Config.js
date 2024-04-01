
const mongoose = require("mongoose");

require("dotenv").config();

async function connectDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to Database!!!');
    } catch (error) {
        console.error('Error connecting to Database:', error);
    }
}

module.exports = connectDatabase;