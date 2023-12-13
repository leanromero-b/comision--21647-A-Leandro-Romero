// const { DataTypes } = require("sequelize");

// const {sequelize} = require('./../config/SequelizeConfig')

// const usuarioModel = sequelize.define("usuario",
//   {
//     // Model attributes are defined here
//     nombre: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     apellido: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       // allowNull defaults to true
//     },
//   },
//   {
//     // Other model options go here
//   }
// );

// module.exports= usuarioModel


//--------------------------------------------------------------------------------------------//
const { Schema, model } = require("mongoose");

const usuarioSchema = new Schema({
  nombre: String,
  password: String,
});

const usuarioModel = model("usuario", usuarioSchema);

module.exports = usuarioModel;
