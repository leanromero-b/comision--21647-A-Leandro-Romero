const postRouter = require('express').Router();

const {
    verPosteos,
    verPost,
    crearPost,
    editarPost,
    eliminarPost,
} = require('./../controllers/postControllers.js');

// Ver Usuuarios
postRouter.get('/post',verPosteos);

// Ver Usuuario
postRouter.get('/post/:id',verPost);

// Crear Usuuario
postRouter.post('/post',crearPost);

// Editar Usuuario
postRouter.put('/post',editarPost);

// Eliminar Usuuario
postRouter.delete('/post', eliminarPost);


module.exports = postRouter;