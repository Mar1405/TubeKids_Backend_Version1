require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(express.json());

const {
  tubeKidsPut,
  tubeKidsPost,
  tubeKidsGet,
  tubeKidsDelete,
} = require("./controllers/tubeKidsController.js");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// check for cors
const cors = require("cors");
app.use(
  cors({
    domains: "*",
    methods: "*",
  })
);

// listen to the task request
app.get("/api/tubeKids", tubeKidsGet);
app.post("/api/tubeKids", tubeKidsPost);
app.put("/api/tubeKids", tubeKidsPut);
app.delete("/api/tubeKids", tubeKidsDelete);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
