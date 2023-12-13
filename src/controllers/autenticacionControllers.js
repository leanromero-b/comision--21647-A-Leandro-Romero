const jwt = require("jsonwebtoken");
const usuarioModel = require('./../models/usuarioModel.js');

const autenticacionController = {};

const JWT_KEY = process.env.JWT_KEY;

// const usuarios = [
//   { id: 1, usuario: "Juan", contrasenia: "123456" },
//   { id: 2, usuario: "Ana", contrasenia: "654321" },
// ];

autenticacionController.autenticar = async (req, res) => {
  try {
    const { usuario, password } = req.body;

    // const usuario = req.body.usuario;
    const usuarioEncontrado = await usuarioModel.findOne({
        usuario: usuario,
        password: password,
    });
    
    if (!usuarioEncontrado) {
            return res.status(404).json({ mensaje: 'El usuario no fué encontrado.' });
        }
        const datos = {
          id: usuarioEncontrado._id,
          usuario: usuarioEncontrado.usuario,
          nombres: usuarioEncontrado.nombres,
          apellidos: usuarioEncontrado.apellidos,
      }

      let token = jwt.sign(datos, JWT_KEY);  
      res.json({ token: token, datos: datos });
  } catch (error) {
    return res.status(500).json({ mensaje: 'Se produjo un error.' });
  }
};

autenticacionController.registrar = (req, res) => {
  // simular registro
};

autenticacionController.verificarToken = (req, res) => {
  const token = req.body.token;
  // console.log(token);

  try {
    let descencriptado = jwt.verify(token, JWT_KEY);
    // console.log(descencriptado);
    res.json({ datos: descencriptado });

  } catch (error) {
    res.status(500).json({
      mensaje: "Se produjo un error",
      error: error,
    });
  }
};

module.exports = autenticacionController;
 