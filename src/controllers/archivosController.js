const archivosController = {};
const path = require("path");
const ruta = path.resolve(__dirname, "../../tmp");

//Metodos
archivosController.subirArchivo = (req, res) => {
  // poner miArchivo en la peticion 
  try {
    const miArchivo = req.files.miArchivo;
    const rutaArchivo = path.join(ruta, miArchivo.name);

    miArchivo.mv(rutaArchivo, function (err) {
      if (err) {
        return res.status(500).json({ error: err });
      }
      // console.log(rutaArchivo);
      return res.json({ mensaje: "Se subio el archivo" });
    });
  } catch (err) {
    return res.status(500).json({ error: "Ocurrio un error subiendo el archivo." });
  }
};

archivosController.subirImagen = (req, res) => {
  // poner miImagen en la peticion 
  // console.log(req.files.miImagen.mimetype)
  try {
    const miImagen = req.files.miImagen;
    const rutaImagen = path.join(ruta, miImagen.name);

    miImagen.mv(rutaImagen, function (err) {
      if (err) {
        return res.status(500).json({ error: err });
      } else if (req.files.miImagen.mimetype !== "image/jpeg") {
        return res.status(500).json( {mensaje: "Solo se admiten formato .jpg"});
      } else {
        // console.log(rutaImagen);
        return res.json({ mensaje: "Se subio la imagen correctamente" });
      }
    });
  } catch (err) {
    return res.status(500).json({ error: "Ocurrio un error subiendo la imagen." });
  }
};

module.exports = archivosController;
