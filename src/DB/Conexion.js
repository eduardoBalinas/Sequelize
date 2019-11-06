const env = require('./env');
const sequelize = require('sequelize');

//Conexion a la base de datoss
const sequelize = new Sequelize(env.database , env.username , env.password , {
    host: env.host,
    dialect: env.dialect
});

//Test de conexion
sequelize
    .authenticate()
    .then(() => {
        console.log('La base de datos esta bien');
    });
