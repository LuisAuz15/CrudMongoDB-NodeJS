const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const esquemaTarea =new esquema({
  titulo: String,
  descripcion: String,
  estado: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('tareas', esquemaTarea);
