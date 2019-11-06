const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

//Middelwears
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

//Rutas
app.use('./Routes/routes_index.js');

//Base de datos
app.use('./DB/Conexion');

//Se inicia el servidor
app.listen( 3000 , () => {
    console.log('En linea');
});