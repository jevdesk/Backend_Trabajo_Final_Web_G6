const Novedad = require('../models/novedad'); 

const novedadCtrl = {}

novedadCtrl.getNovedades = async (req, res) => {
    novedades = await Novedad.find().populate("usuario");
    res.json(novedades);
}

novedadCtrl.getNovedad = async (req, res) => {
    const novedad = await Novedad.findById(req.params.id).populate("novedad");
    res.json(novedad);
}

novedadCtrl.createNovedad = async (req, res) => {
    const novedad = new Novedad (req.body);
    await novedad.save();
    res.json({
        'status': 'Novedad creada'
    });
}

novedadCtrl.editNovedad = async (req, res) => {
    const novedadEdit=  new Novedad (req.body);
    await Novedad.findByIdAndUpdate(req.params.id, {$set: novedadEdit}, {new: true});
    res.json({
        'status': 'Novedad modificada'
    })
}

novedadCtrl.deleteNovedad = async (req, res)=>{
    await Novedad.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Novedad eliminada'
    })
}
module.exports= novedadCtrl;