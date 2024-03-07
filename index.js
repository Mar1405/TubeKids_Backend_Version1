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
  videoPost,
  videoGet,
  videoDelete,
  videoUpdate,
} = require("./controllers/videosController.js");

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
app.get("/api/videos", videoGet);
app.post("/api/videos", videoPost);
app.put("/api/videos", videoUpdate);
app.delete("/api/videos", videoDelete);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
