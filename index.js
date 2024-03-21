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

const {
  registroPost,
  registroGet,
  registroDelete,
  registroUpdate,
  login,
} = require("./controllers/registroController.js");

const registroController = require("./controllers/registroController.js");

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

// Rutas de Videos
app.get("/api/videos", videoGet); // Ruta para crear un nuevo video
app.post("/api/videos", videoPost); // Ruta para obtener todos los videos
app.put("/api/videos/:id", videoUpdate); // Ruta para actualizar un video por su ID
app.delete("/api/videos/:id", videoDelete); // Ruta para eliminar un video por su ID

app.post("/api/registros", registroPost); // Ruta para crear un nuevo registro
app.get("/api/registros", registroGet); // Ruta para obtener todos los registros
app.delete("/api/registros/:id", registroDelete); // Ruta para eliminar un registro por su ID
app.put("/api/registros/:id", registroUpdate); // Ruta para actualizar un registro por su ID

app.post('/api/login', registroController.login); //Ruta para inicio de sesión (login)


app.get('/', (req, res) => {
  res.end("Bienvenidos al servidor backend TubeKids Version 1")
})

app.listen(5000, () => {
  console.log(`Server Started at ${5000}`);
});
