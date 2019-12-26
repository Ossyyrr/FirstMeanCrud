const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const {mongoose} = require('./database');

//Configuracion del servidor (Settings)
app.set('port', process.env.PORT || 3000);       //puerto del sistema operativo o, si no existe, puerto 3000

//Funciones para procesar los datos (Middlewares), se ejecutan con cada petición
app.use(morgan('dev'))
app.use(express.json());       //entender formato json desde el navegador
app.use(cors({origin: 'http://localhost:4200'}));            //servidor que se comunica con este servidor

//Routes
app.use('/api/objects/', require('./routes/objeto.routes'));


//Start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});


//mongod
//npm run dev
//http://localhost:3000/api/objects