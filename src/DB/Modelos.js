const sequelize = require('sequelize');
const { sequelize } = require('./Conexion');

const User = sequelize.define('user' , {
    //Atributos del modelo del usuario
    id: {
        type : DataTypes.BIGINT(11),
        primaryKey: true
        },
    name: {
        type: DataTypes.VARCHAR
        },
    lastname:{
        type: DataTypes.VARCHAR
         },
    calle: {
        type: DataTypes.VARCHAR
         },
    avenida: {
        type: DataTypes.VARCHAR
        },
    delegacion:{
        type: DataTypes.VARCHAR
         },
    numero: {
        type: DataTypes.VARCHAR
        },
    username: {
        type: DataTypes.VARCHAR
        },
    password: {
        type: DataTypes.VARCHAR
         }



});

const Repartidor = sequelize.define('repartidor' , {
    //Atributos del repartidor
});

//Crea la tabla

User.sync({ force: true })
    .then(() => {
        return User.create({
            //Parametros de la tabla se crea un nuevo usuario para crear la tabla
    });
});

Repartidor.sync({ force: true })
    .then(() => {
        return Repartidor.create({
            //Parametros de la tabla del repartior se crea un repartidor de prueba
    })
})