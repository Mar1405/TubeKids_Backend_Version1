const mongoose = require('mongoose');

const usuarioRestringidoSchema = new mongoose.Schema({
  nombreCompleto: { type: String, required: true },
  pin: { type: Number, required: true, minlength: 6, maxlength: 6 },
  avatar: { type: String, required: true }, 
  edad: { type: Number },
});

module.exports = mongoose.model('UsuariosRestringidos', usuarioRestringidoSchema);
