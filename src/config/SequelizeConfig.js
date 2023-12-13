const { Sequelize } = require("sequelize");

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
const DB_DIALECT = process.env.DB_DIALECT;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

const conectionMysqlDB = async () => {
    try {
      await sequelize.sync();
      console.log(`Conexion exitosa a la BBDD ${DB_DIALECT} ${DB_NAME}`);

      // return sequelize; 

    } catch (error) {
      console.error("Imposible conectar a la base de datos:", error);
      // return false;
    }
}


module.exports = {conectionMysqlDB, sequelize}
