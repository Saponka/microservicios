const server = require("./src/server");

const PORT = 8001;

server.listen(PORT,()=>{
    console.log(`Character Server Running on Port: ${PORT}`);
});