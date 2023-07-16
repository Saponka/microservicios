const {ClientError} = require("../utils/errors");
//trae ClientError desde utils/errors
//que es una clase que se extiende de Error 

module.exports = (req,res,next)=>{
    //name se requiere del body 
    const {name}= req.body;

    //si hay name retorna next() y ese ejecutara la funcion que sigue
    if(name) return next();
    //si no tira un error creando una nueva instancia de ClientError 
    else throw new ClientError("Error en el nombre",401);
};