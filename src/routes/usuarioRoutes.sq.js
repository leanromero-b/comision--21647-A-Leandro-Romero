const usuarioRouter = require('express').Router();

const {
    verUsuarios,
    verUsuario,
    crearUsuario,
    editarUsuario,
    eliminarUsuario,
} = require('./../controllers/usuariosControllers.js');

// Ver Usuuarios
usuarioRouter.get('/usuarios',verUsuarios);

// Ver Usuuario
usuarioRouter.get('/usuario/:id',verUsuario);

// Crear Usuuario
usuarioRouter.post('/usuario',crearUsuario);

// Editar Usuuario
usuarioRouter.put('/usuario/:id',editarUsuario);

// Eliminar Usuuario
usuarioRouter.delete('/usuario/:id', eliminarUsuario);


module.exports = usuarioRouter;