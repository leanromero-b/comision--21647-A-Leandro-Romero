const comentarioRouter = require('express').Router();

const {
    listarComentariosDePost,
    crearComentario,
} = require('./../controllers/comentarioControllers.js');

comentarioRouter.get('/comentarios/:idPost', listarComentariosDePost);

comentarioRouter.post('/comentarios', crearComentario);

module.exports = comentarioRouter;
