const postRouter = require('express').Router();

const {
    verPosteos,
    verPost,
    crearPost,
    editarPost,
    eliminarPost,
} = require('./../controllers/postControllers.js');

// Ver posteos
postRouter.get('/posteos',verPosteos);

// Ver post
postRouter.get('/post/:id',verPost);

// Crear post
postRouter.post('/post',crearPost);

// Editar post
postRouter.put('/post',editarPost);

// Eliminar post
postRouter.delete('/post', eliminarPost);


module.exports = postRouter;