const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsuarioSchema = new Schema ({
    usuario: {type: String, required: true},
    password: {type: String, required: true},
    activo: {type: Boolean, required: true},
    perfil: {type: String, required: true}, //socio-administrativo-administrador-gerente
    
})

module.exports = mongoose.model('Usuario', UsuarioSchema);