const emailRoutes = require("express").Router();

const { enviarEmail } = require("./../controllers/emailControllers.js");

emailRoutes.post("/enviarEmail", enviarEmail);

module.exports = emailRoutes;
