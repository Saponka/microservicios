const {catchedAsync} = require("../utils");
//traigo la function catchedAsync desde utils

module.exports={
    //envolvemos con la funcion catchedAsync() al require de la ruta donde se encuentra la funcion que se necesite 
    getCharacters: catchedAsync( require("./getCharacters")),
    createCharacter: catchedAsync( require("./createCharacter"))
};