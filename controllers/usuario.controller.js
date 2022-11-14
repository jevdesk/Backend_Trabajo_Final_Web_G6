const Usuario = require('../models/usuario');
const usuarioCtrl = {}

usuarioCtrl.getUsuarios = async (req,res) => {
    console.log("Obteniendo usuarios");
    usuario = await Usuario.find();
    res.json(usuario);
}

usuarioCtrl.createUsuario = async (req, res) => {
    //en req.body se espera que vengan los datos de usuario a crear
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.json({
        "estado":"Usuario creado"
    });
}

usuarioCtrl.updateUsuario = async (req, res) => {
    const vusuario =  new Usuario (req.body);
    await Usuario.findByIdAndUpdate(req.params.id, {$set: vusuario}, {new: true});
    res.json({
        "estado": "Usuario actualizado"
    })
}
usuarioCtrl.deleteUsuario = async (req, res)=>{
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({
        "estado":"Usuario eliminado"
    })
}
usuarioCtrl.buscarUsuario = async (req, res) => {
    const criteria = {
        usuario: req.body.usuario
    }
    Usuario.findOne(criteria, function (err, user) {
        //el método findOne retorna un objeto que cumpla con los criterios de busqueda
        if (err) {
            res.json({
                status: 0,
                message: 'error'
            })
        };
        if (!user) {
            res.json({
                status: 1,
                message: "no encontrado"
            })
        } else {
            res.json({
                status: 2,
                message: "encontrado",
            });
        }
    })

}
usuarioCtrl.loginUsuario = async (req, res) => {
    //en req.body se espera que vengan las credenciales de login
    //defino los criterios de busqueda en base al username y password recibidos
    const criteria = {
        usuario: req.body.usuario,
        password: req.body.password
    }
    //el método findOne retorna un objeto que cumpla con los criterios de busqueda
    Usuario.findOne(criteria, function (err, user) {
        //el método findOne retorna un objeto que cumpla con los criterios de busqueda
        if (err) {
            res.json({
                status: 0,
                message: 'error'
            })
        };
        if (!user) {
            res.json({
                status: 0,
                message: "not found"
            })
        } else {
            res.json({
                status: 1,
                message: "success",
                user :{
                    _id:user._id,
                    usuario: user.usuario,
                    password: user.password,
                    activo: user.activo,
                    perfil: user.perfil
                }
            });
        }
    })
}
//exportacion del modulo controlador
module.exports = usuarioCtrl;