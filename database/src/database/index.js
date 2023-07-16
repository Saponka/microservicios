const mongoose = require('mongoose');

//Requiero del archivo envs.js - MONGO_URI -
//envs.js tiene la config() de dotenv 
const {MONGO_URI}= require('../config/envs');

//Crear Conección utilizando a mongoose, pasandole la variable de entorno con la URI
const conn = mongoose.createConnection(MONGO_URI);

conn.on('connected', () => {
    console.log('[Mongoose] - Conectado a MongoDB');
});
conn.on('error',(error)=>{
    console.log('[Mongoose]-Error:',error);
});

//const Character = conn.model("Character",require('./schemas/charactersSchema'));
//definimos los esquemas requiriendo la coneccion con el modelo, y el directorio donde se encuentra el schema
//directamente los exportamos como modulos para usarlos directamente desde el index.js de database de la carpeta principal
module.exports = {
    Character:conn.model("Character",require('./schemas/charactersSchema')),
    Film:conn.model("Film",require('./schemas/filmSchema')), 
    Planet:conn.model("Planet",require('./schemas/planetSchema')), 
}
