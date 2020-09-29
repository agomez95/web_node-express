//se instalo el modulo ejs para plantillas 

//modulos del proyecto
const express = require('express');
const app = express();
const path = require('path');

//configuraciones
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')) //configuro la carpeta 'views' para mandar mi vista al cliente
app.set('view engine', 'ejs') //express tiene una integracion con ejs y no necesita ser instanciado como modulo el motor de plantilla

//middleware

//static
app.use(express.static(path.join(__dirname, 'public')));//esto hace que se publica la carpeta "public" desde el navegador lo que lo ahce accesible desde el navegador (tendra archivos como estilos, imagenes, logos, etc.)

//routes
app.use(require('./routes/routes'));

//puerto
app.listen(app.get('port'), () => {
    console.log("Server on port: ", app.get('port'));
});
