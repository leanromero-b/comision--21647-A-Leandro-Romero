const comentarioModel = require('./../models/comentarioModel.js');

const { verificarToken } = require('./../utils/token.js');

const comentariosController =  {}

comentariosController.listarComentariosDePost = async (req, res) => {
    try { 
        const { idPost } = req.params;

        const comentarios = await comentarioModel.find({
            post: idPost
        }).populate('autor', "-password");        
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
        const { descripcion, idPost } = req.body;
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
            post: idPost,
        });

        await nuevoComentario.save();

        return res.json({ mensaje: 'Se publico el comentario' });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrió un error interno al enviar el comentario',
            error: error
        });
    }
}

module.exports = comentariosController;