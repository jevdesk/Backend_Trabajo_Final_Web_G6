const Pago = require('../models/pago'); 

const pagoCtrl = {}

pagoCtrl.getPagos = async (req, res) => {
    pagos = await Pago.find().populate('afiliado');
    res.json(pagos);
}

pagoCtrl.createPago = async (req, res) => {
    console.log("crear Pago");
    const pago = new Pago (req.body);
    await pago.save();
    res.json({
        'status': 'Pago guardado'
    });
}

pagoCtrl.getPago = async (req, res) => {
    const pago = await Pago.findById(req.params.id);
    res.json(pago);
}

pagoCtrl.editPago = async (req, res) => {
  
    const vpago =  new Pago (req.body);
    await Pago.findByIdAndUpdate(req.params.id, {$set: vpago}, {new: true});
    res.json({
        'status': 'Pago actualizado'
    })
}
pagoCtrl.deletePago = async (req, res)=>{
    await Pago.findByIdAndRemove(req.params.id)
    res.json({
        status: 'Pago eliminado'
    })
}
module.exports= pagoCtrl;