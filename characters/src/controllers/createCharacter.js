const Character = require("../data");
//Character requiere a data que tiene los modulos de create: , y list:return characters.json
const{ response} = require("../utils")
//response desde utils

module.exports = async(req,res)=>{

    const newCharacter = await Character.create();
    //de Characters necesito el create de data
    response(res,201,newCharacter);

}


   
