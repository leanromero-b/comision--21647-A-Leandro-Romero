const comentarioModel = require('./../models/comentarioModel.js');

const { verificarToken } = require('./../utils/token.js');

const comentariosController =  {}

comentariosController.listarComentariosDePost = async (req, res) => {
    try {
        const { idPosteo } = req.params;

        const comentarios = await comentarioModel.find({
            post: idPosteo
        }).populate('autor');        
        return res.json(comentarios);


    } catch (error) {
        return res.status(500).json({
            mensaje: 'Error al buscar los comentarios.',
            error: error
        });
    }
}

comentariosController.crearComentario = async (req, res) => {
    try {
        const { descripcion, idPosteo } = req.body;
        const { token } = req.headers;

        const tokenValido = verificarToken(token);

        if (!tokenValido) {
            return res.status(500).json({
                mensaje: 'El token no es válido',
            });
        }

        const autor = tokenValido.id;

        const nuevoComentario = new comentarioModel({
            descripcion: descripcion,
            autor: autor,
            post: idPosteo,
        });

        await nuevoComentario.save();

        return res.json({ mensaje: 'Se publico el comentario' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno',
            error: error
        });
    }
}

module.exports = comentariosController;