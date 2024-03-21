const mongoose = require("mongoose");

const registroSchema = new mongoose.Schema({
    correo: { type: String, required: true },
    password: { type: String, required: true },
    pin: { type: Number, required: true, minlength: 6, maxlength: 6 },
    nombre: { type: String, required: true },
    apellidos: { type: String, required: true },
    paisOrigen: { type: String },
    fechaNacimiento: { type: Date, required: true },
});

module.exports = mongoose.model("registros", registroSchema);