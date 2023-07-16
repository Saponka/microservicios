//function de orden superior: function que retorna otra fn() y esa recibe otra function

module.exports = (fn)=>{
    return function(req,res,next){
      //si hay un error async lo agarra el catch 
      fn(req,res).catch((error)=>{
      //next function para pasar de un middleware a otro
      //la req,pasa al manejador de errores de express 
          next(error);
      })
    };
  };
  //(fn)=>(req,res,next)=>fn(req,res).catch((err)=> next(err))