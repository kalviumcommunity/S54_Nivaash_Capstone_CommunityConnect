const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = 3000;
const cors = require("cors"); 
const errorHandler = require("./middleware/ErrorHandller.js");
const volunteerRouter = require('./Routes/volunteerRouter');

app.use(errorHandler);
app.use(cors());
app.use(express.json());

async function connectDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to Database!!!');
    } catch (error) {
        console.error('Error connecting to Database:', error);
    }
}

app.get("/", (req, res) => {
    connectDatabase()
        .then(() => {
            console.log('Connected to Database!!!')
        });
    res.status(200).send("Connected to Database!!!")
});

app.use("/volunteers", volunteerRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
