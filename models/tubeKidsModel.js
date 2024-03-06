const mongoose = require("mongoose");

const carreraSchema = new mongoose.Schema({
  nombre: {
    required: true,
    type: String,
  },
  URL: {
    required: true,
    type: String,
  },
  descripcion: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("TubeKidsTest", TubeKidsSchema);
