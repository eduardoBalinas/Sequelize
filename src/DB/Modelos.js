const sequelize = require('sequelize');

const User = sesquelize.define('user' , {
    //Atributos del modelo del usuario
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