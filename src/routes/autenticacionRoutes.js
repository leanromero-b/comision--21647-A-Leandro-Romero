const autenticarRoutes = require("express").Router();

const {
  autenticar,
  registrar,
  verificarToken,
} = require("./../controllers/autenticacionControllers.js");

autenticarRoutes.post("/autenticar", autenticar);

autenticarRoutes.post("/verificarToken", verificarToken);

module.exports = autenticarRoutes;
