//trae characters.json de data/index.js 
const Character = require("../data");
const {response} = require("../utils");

module.exports = async (req,res)=>{
    
    //data/index.js contiene el export de la propiedad list:
    //function que retorna la variable characters que contien al archivo json
   const characters = await  Character.list();
   //res.status(200).json(characters)
   //response viene de utils/index.js la cual requiere la function de utils/response
   response(res,200,characters);
};