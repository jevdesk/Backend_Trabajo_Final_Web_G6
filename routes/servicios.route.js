const express = require('express');

const router = express.Router();

const servicioCtrl = require('./../controllers/servicio.controller');

router.get('/', servicioCtrl.getServicios);
router.post('/', servicioCtrl.createServicio);
router.put('/:id', servicioCtrl.updateServicio);

module.exports = router;