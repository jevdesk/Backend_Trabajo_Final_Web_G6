const Noticia = require ('../models/noticia');

const noticiaCtrl = {};

noticiaCtrl.getNoticias = async (req, res) => {
    const noticia = await Noticia.find().populate('usuario');
    res.json(noticia);
};

noticiaCtrl.createNoticia = async (req, res) => {
    const noticia = new Noticia(req.body);
    await noticia.save();
    res.json({
        'status': 'Noticia creada'
    });
};

noticiaCtrl.editNoticia = async (req, res) => {
    const modNoticia = new Noticia(req.body);
    await Noticia.findByIdAndUpdate(req.params.id, {$set: modNoticia}, {new: true});
    res.json({
        'status':'Noticia actualizada'
    });
};


module.exports = noticiaCtrl;