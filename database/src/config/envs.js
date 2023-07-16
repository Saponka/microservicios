//Configuracion del modulo  dotenv
require('dotenv').config();

//Exporta directamente las variables de entorno - MONGO_URI - PORT -
module.exports = {
    MONGO_URI : process.env.MONGO_URI,
    PORT:process.env.PORT,
};
//un solo archivo con toda la configuracion de variables de entorno