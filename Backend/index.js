
const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors"); 
const connectDatabase = require('./Config/Config.js');
const errorHandler = require("./middleware/ErrorHandller.js");

app.use(errorHandler);
app.use(cors());
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
