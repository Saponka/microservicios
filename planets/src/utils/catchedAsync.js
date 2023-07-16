//function que recibe otra function


module.exports = (fn)=>{
    return function(req,res,next){
      //si hay un error async lo agarra el catch 
      fn(req,res).catch((error)=>{
      //next function para pasar de un middleware a otro
      //pasa al manejador de errores de 
          next(error);
      })
    };
  };