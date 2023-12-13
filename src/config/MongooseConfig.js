const mongoose = require("mongoose");

const MONGO_DB_URI = process.env.MONGO_DB_URI;

const conectarMongo = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log("Conexcion a la base de datos exitosa");
  } catch (error) {
    console.log("Error: ", error);
  }
};

module.exports = conectarMongo;
 