
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = 3000;
const connectDatabase = require('./Config/Config.js');

    app.use(express.json());

    app.get("/", (req, res) => {
        connectDatabase()
            .then(() => {
                console.log('Connected to Database!!!')
            });
        res.status(200).send("Connected to Database!!!")
    });
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
