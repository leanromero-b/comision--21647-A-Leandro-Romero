const archivosRouter = require("express").Router();

const { 
    subirArchivo,
    subirImagen,

}= require('./../controllers/archivosController');

archivosRouter.post('/subirArchivo',subirArchivo);

archivosRouter.post('/subirImagen',subirImagen);


module.exports = archivosRouter;