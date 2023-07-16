
module.exports = (res,statusCode,data)=>{
    res.status(statusCode).json({
        error:false,
        name:"Planets",
        type:"json",
        //data:data
        data,
    });
    };
    