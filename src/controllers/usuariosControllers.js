const usuarioModel = require("./../models/usuarioModel.js");

const UsuarioController = {};

// Ver usuuarios
UsuarioController.verUsuarios = async (req, res) => {
  try {
    const listaUsuario = await usuarioModel.find();

    return res.json(listaUsuario);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error interno",
      error: error,
    });
  }
};

// Ver usuuario
UsuarioController.verUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await usuarioModel.findById(id);

    return res.json(usuario);
  } catch (error) {
    let mensaje = "Ocurrio un error interno";
    
    if (error.kind === "ObjectId") {
        return res.status(404).json ({
            mensaje: `No se encontro usuario`
        })
    }
    return res.status(500).json({
      mensaje: mensaje,
      error: error,
    });
  }
};

// Crear usuuario
UsuarioController.crearUsuario = async (req, res) => {
  try {
    const { usuario, nombre, apellido, password } = req.body;

    const nuevoUsuario = new usuarioModel({
      usuario: usuario,
      nombre: nombre,
      apellido: apellido,
      password: password,
    });
    await nuevoUsuario.save(); //guardar el nuevo documento en mongo.

    return res.json({ mensaje: "Se creo el usuario." });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error interno",
      error: error,
    });
  }
};

// Editar usuuario
UsuarioController.editarUsuario = async (req, res) => {
  try {
    const { id, nombre, password } = req.body;

    if ( !id || !nombre || !password ) {
      return res.status(500).json({
        mensaje: "Debe completar todos los campos",
        error: error,
      })
    }


    await usuarioModel.findByIdAndUpdate(id, {
      nombre: nombre,
      password: password,
    });

    return res.json({ mensaje: "Se edito el usuario correctamente." });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error interno",
      error: error,
    });
  }
};

// Eliminar usuuario
UsuarioController.eliminarUsuario = async (req, res) => {
  try {
    // console.log(req.body)
    const {id} = req.body;

    await usuarioModel.findByIdAndDelete(id);
    return res.json({ mensaje: "El usuario ha sido eliminado." });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error interno",
      error: error,
    });
  }
};

module.exports = UsuarioController;


