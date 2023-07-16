
//response() tiene como parametros:
// 1- res, 2- el numero de status, 3- El tipo de  data  que se le pase,
//devuelve un json con las propiedades:
//error: en false, si llega no hay error
//data, la data que va a leer

module.exports = (res,statusCode,data)=>{
    res.status(statusCode).json({
        error:false,
        name:"Films",
        type:"json",
        //data:data
        data,
    });
    };
    