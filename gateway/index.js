const express = require("express");
const morgan = require("morgan");
const {createProxyMiddleware} = require("http-proxy-middleware");


const app = express();
//middlewares
app.use(morgan("dev"));


//http-proxy-middleware se configura con objeto{} para agregar propiedades
app.use("/characters", createProxyMiddleware({
//Para conectar a la red para que se conecte con el gateway 
//Cambiar el localhost del target por un nombre, ej:"http://characters:8001"
	target:"http://characters:8001", //"http://localhost:8001"
 //propiedad target adonde esta escuchando
	changeOrigin:true
 //changeorigin se modifican los headers 
}));
app.use("/planets", createProxyMiddleware({
	target:"http://planets:8002",  
	changeOrigin:true
}));
app.use("/films", createProxyMiddleware({
	target:"http://films:8003",
	changeOrigin:true
}));
////////////////////database////////////////////////
/* app.use("/database", createProxyMiddleware({
	target:"http://database:8004",
	changeOrigin:true
})); */

//ruta prueba
app.get("/",(req,res)=>{
    res.status(200).json({
        intruccions: "Elija el Port",
        personajes:"/characters",
        planetas:"/planets",
        films:"/films"
    })
})

app.listen(8000,()=>{
    console.log("server on port 8000");
});