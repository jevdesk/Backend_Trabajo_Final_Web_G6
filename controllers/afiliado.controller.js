const Afiliado = require ('../models/afiliado');

const afiliadoCtrl = {};

afiliadoCtrl.getAfiliados = async (req, res) => {
    const afiliados = await Afiliado.find();
    res.json(afiliados);
};

afiliadoCtrl.createAfiliado = async (req, res) => {
    const afiliado = new Afiliado(req.body);
    await afiliado.save();
    res.json({
        'status': 'Afiliado creado'
    });
};

afiliadoCtrl.getAfiliado = async (req, res) => {
    const afiliado = await Afiliado.findById(req.params.id);
    res.json(afiliado);
};

afiliadoCtrl.editAfiliado = async (req, res) => {
    const modAfiliado = new Afiliado(req.body);
    await Afiliado.findByIdAndUpdate(req.params.id, {$set: modAfiliado}, {new: true});
    res.json({
        'status':'Afiliado actualizado'
    });
};

afiliadoCtrl.deleteAfiliado = async (req, res) => {
    await Afiliado.findByIdAndRemove(req.params.id);
    res.json({
        'status':'Afiliado eliminado'
    });
};
afiliadoCtrl.buscarAfiliadoEmail = async (req, res) => {
    const criteria = {
        email: req.body.email
    }
    Afiliado.findOne(criteria, function (err, afi) {
        //el método findOne retorna un objeto que cumpla con los criterios de busqueda
        if (err) {
            res.json({
                status: 0,
                message: 'error'
            })
        };
        if (!afi) {
            res.json({
                status: 1,
                message: "no encontrado"
            })
        } else {
            res.json({
                status: 2,
                message: "encontrado",
                afi:{
                    _id : afi._id,
                    apellido : afi.apellido,
                    nombres : afi.nombres,
                    dni : afi.dni,
                    email : afi.email,
                    imagen : afi.imagen,
                    telefono : afi.telefono 
                }
            });
        }
    })
}
module.exports = afiliadoCtrl;