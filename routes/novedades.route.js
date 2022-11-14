console.log("Carga de novedades.route");

const express = require('express');
const router = express.Router();

const novedadCtrl = require('./../controllers/novedad.controller.js');

router.get('/', novedadCtrl.getNovedades);
router.post('/', novedadCtrl.createNovedad);
router.get('/:id', novedadCtrl.getNovedad);
router.put('/:id', novedadCtrl.editNovedad);
router.delete('/:id', novedadCtrl.deleteNovedad);

module.exports = router;