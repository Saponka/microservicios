const express = require("express");
const morgan = require("morgan");

const server = express();
//middlewares
server.use(express.json());
server.use(morgan("dev"));
//ruta unica
server.use("/characters",require("./routes"));

//manejador de errores de express si no encuentra ruta
server.use("*",(req,res)=>{
res.status(404).send("Not Found")
});

//manejador de errores propio
server.use((err,req,res,next)=>{
    //res.send("Este es el manejador de errores")
    res.status(err.statusCode || 500).send({
        error:true,
        message:err.message,
    });
});

module.exports = server;