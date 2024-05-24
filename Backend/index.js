const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000; // Use port from environment variable or default to 3000

const cors = require("cors");
const errorHandler = require("./middleware/ErrorHandller.js");
const volunteerRouter = require("./Routes/VolunteerRouter.js");
const OrganisationRouter = require("./Routes/OrganisationRouter.js");
const PostRouter = require("./Routes/PostRouter.js");

app.use(express.json());
app.use(cors());
app.use(errorHandler);

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to Database!");
  } catch (error) {
    console.error("Error connecting to Database:", error);
    process.exit(1);
  }
}

connectDatabase();

app.get("/", (req, res) => {
  res.status(200).send("Connected to Database!!!");
});

app.use("/volunteers", volunteerRouter);
app.use("/organisations", OrganisationRouter); // Updated route to use 'organisations' instead of 'Organisations'
app.use("/posts", PostRouter); // Updated route to use 'posts' instead of 'post'

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
