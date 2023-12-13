const usuarioModel = require("./../models/usuarioModel.js");

const UsuarioController = {};

// Ver usuuarios
UsuarioController.verUsuarios = async (req, res) => {
  try {
    const listaUsuarios = await usuarioModel.findAll();

    return res.json(listaUsuarios);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Hubo un error: ",
      error: error,
    });
  }
};

// Ver usuuario
UsuarioController.verUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const usuarioEncontrado = await usuarioModel.findOne({
      where: { id: id },
    });

    if (usuarioEncontrado) {
      return res.json(usuarioEncontrado);
    } else {
      return res.status(404).send("No se pudo encontrar el usuario.");
    }
  } catch (error) {
    return res.status(500).json({
      mensaje: "Hubo un error al intentar encontrar al usuario: ",
      error: error,
    });
  }
};

// Crear usuuario
UsuarioController.crearUsuario = async (req, res) => {
  try {
    const { nombre, apellido } = req.body;

    const crearUsuario = await usuarioModel.create({
      nombre: nombre,
      apellido: apellido,
    });

    if (crearUsuario) {
      return res.json(crearUsuario);
    } else {
      return res.status(404).send("No se pudo crear el usuario.");
    }
  } catch (error) {
    return res.status(500).json({
      mensaje: "Hubo un error al intentar crear al usuario: ",
      error: error,
    });
  }
};

// Editar usuuario
UsuarioController.editarUsuario = async (req, res) => {
  try {
    const {id} =  req.params;
    const {nombre, apellido} = req.body;
    
    const usuarioEncontrado = await usuarioModel.findOne({
      where: { id: id },
    });
    if (usuarioEncontrado) {
      const usuarioEditado = await usuarioModel.update({
        nombre: nombre,
        apellido: apellido
      },{where: {id: id}});

      return res.json(usuarioEditado);
    } else {
      return res.status(404).send("No se pudo encontrar el usuario.");
    }
  } catch (error) {
    return res.status(500).json({
      mensaje: "Hubo un error al intentar crear al usuario: ",
      error: error,
    });    
  }
};  
 
// Eliminar usuuario
UsuarioController.eliminarUsuario = async (req, res) => {

  try {
    const { id } = req.params;

    const usuarioEliminado = await usuarioModel.destroy({
      where: { id: id },
    });

    if (usuarioEliminado){
      return res.json({
        mensaje: 'El usuario ha sido eliminado'
      })
    } else {
      return res.status(404).json({ mensaje: `No se encontro el usuario y no se pudo eliminar`});
    }
  } catch (error) {
    return res.status(500).json({
      mensaje: "Hubo un error al intentar crear al usuario: ",
      error: error,
    });
  }
};

module.exports = UsuarioController; 
