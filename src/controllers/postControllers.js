const PostModel = require("./../models/postModel");
const {verificarToken} = require('./../utils/token.js')

const postController = {};

// Ver Posteos
postController.verPosteos = async (req, res) => {
  try {
    const listaPosteos = await PostModel.find().populate("autor");

    return res.json(listaPosteos);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error interno",
      error: error,
    });
  }
};

// Ver Post
postController.verPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostModel.findById(id);

    return res.json(post);
  } catch (error) {
    let mensaje = "Ocurrio un error interno ";

    if (error.kind === "ObjectId") {
      return res.status(404).json({
        mensaje: `No se encontro el post`,
      });
    }
    return res.status(500).json({
      mensaje: mensaje,
      error: error,
    });
  }
};

// Crear Post
postController.crearPost = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    const {token} = req.headers; // tomo el autor a partir del token
    
    const tokenValido = verificarToken(token);

    if (!tokenValido) {
      return res.status(500).json({
        mensaje: "El token no es válido",
        error: error,
      });
    }
    
    const autor = tokenValido.id; // si el token es valido traigo el autor

    const nuevoPost = new PostModel({
      titulo: titulo,
      descripcion: descripcion,
      autor: autor,
    });
    await nuevoPost.save(); //guardar el nuevo post en mongo.

    return res.json({ mensaje: "Se creo el Post." });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error interno al querer crear el post",
      error: error,
    });
  }
};

// Editar Post
postController.editarPost = async (req, res) => {
  try {
    const { id, titulo, descripcion } = req.body;

    const { token } = req.headers;

    const tokenValido = verificarToken(token);

    if (!tokenValido) {
        return res.status(500).json({
            mensaje: 'El token invalido'
        });
    }

    const userId = tokenValido.id;
        const post = await PostModel.findById(id);

        if (post.autor.toString() !== userId) {
            return res.status(500).json({
                mensaje: 'No autorizado'
            });
        }

    await PostModel.findByIdAndUpdate(id, {
      titulo: titulo,
      descripcion: descripcion,
    });

    return res.json({ mensaje: "Se edito el post correctamente." });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error interno",
      error: error,
    });
  }
};

// Eliminar Post
postController.eliminarPost = async (req, res) => {
  try {
    const id = req.body.id;

    await PostModel.findOneAndDelete(id);
    return res.json({ mensaje: "El post ha sido eliminado." });
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error interno al querer eliminar el post",
      error: error,
    });
  }
};

module.exports = postController;
