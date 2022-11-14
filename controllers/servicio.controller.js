const Servicio = require('../models/servicio');

const servicioCtrl = {}

servicioCtrl.getServicios = async (req,res) => {
    console.log("obteniendo servicios");
    servicio = await Servicio.find().populate('afiliadosInsc');
    res.json(servicio);
}

servicioCtrl.createServicio = async (req,res) => {
    console.log("creando servicio");
    const servicio = new Servicio(req.body);
    await servicio.save();
    res.json({
        "estado":"Servicio guardado"
    })
}

servicioCtrl.updateServicio = async (req, res) => {
    const vservicio =  new Servicio(req.body);
    await Servicio.findByIdAndUpdate(req.params.id, {$set: vservicio}, {new: true});
    res.json({
        "estado": "Servicio actualizado"
    })
}

module.exports = servicioCtrl;