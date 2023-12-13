require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require('cors')

const conectarMongo = require("./config/MongooseConfig.js");

const usuarioRouter = require("./routes/usuarioRoutes.js");
const autenticacionRouter = require("./routes/autenticacionRoutes.js");
const archivosRouter = require("./routes/archivosRoutes.js");
const postRouter = require("./routes/postRoutes.js");
const comentarioRouter = require("./routes/comentarioRoutes.js");
const emailRoutes = require("./routes/emailRoutes.js");

// const {conectionMysqlDB} = require('./config/SequelizeConfig.js');

const app = express();

const PORT = 3000;

// app.get('/', (req, res) => {
//   res.send('Hola Mundo!')
// })

//Middleware
app.use(cors ());
app.use(bodyParser.json());
app.use(fileUpload());

// Rutas
app.use(usuarioRouter);
app.use(autenticacionRouter);
app.use(archivosRouter);
app.use(postRouter);
app.use(comentarioRouter);
app.use(emailRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  // conectionMysqlDB();
  conectarMongo();
});
