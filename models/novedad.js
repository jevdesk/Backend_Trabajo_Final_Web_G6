const mongoose = require('mongoose');
const Usuario = require('./usuario');
const { Schema } = mongoose;

const NovedadSchema = new Schema({
    usuario: {type: Schema.Types.ObjectId, ref: Usuario},
    asunto: {type: String, required: true},
    texto: {type: String, required: true},
    estado: {type: String, required: true},//pendiente-procesado
    fecha: {type:Date, required:true},
    quitado: {type:Boolean, required:true}
})

module.exports = mongoose.model('Novedad', NovedadSchema);