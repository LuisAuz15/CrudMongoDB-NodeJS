const path = require('path');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const servidor = express();

//conectando a base de datos
mongoose.connect('mongodb://localhost/crud-mongo-nodejs')
  .then(baseDeDatos => console.log('Base de datos conectada'))
  .catch(errorBaseDeDatos => console.log(errorBaseDeDatos));

//importando rutas
const rutaIndex = require('./rutas/index');


// configuraciones
servidor.set('puerto', process.env.PORT || 3000);
servidor.set('views', path.join(__dirname, 'vistas'));
servidor.set('view engine', 'ejs');

//middlewares
servidor.use(morgan('dev'));
servidor.use(express.urlencoded({extended: false}));

//rutas
servidor.use('/', rutaIndex);

//iniciando el servidor
servidor.listen(servidor.get('puerto'), () => {
  console.log(`Servidor esperando respuesta del puerto ${servidor.get('puerto')}`);
});
