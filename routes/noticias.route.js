const express = require("express");
const router = express.Router();
//defino controlador para el manejo de CRUD
const noticiaCtrl = require('./../controllers/noticia.controller');
// definiendo rutas
router.get('/', noticiaCtrl.getNoticias);
router.post('/', noticiaCtrl.createNoticia);
router.put('/:id', noticiaCtrl.editNoticia);
//exportacion del modulo de rutas
module.exports = router;