const server = require("./src/server");
//const {PORT} = require('./src/config/envs')

//const { Character,Film,Planet}= require('../database/src/database/index');

const PORT = 8004;
/* Character.insert({
_id:"101",
name:"Jorge Vega",
birth_year:"1991",
gender: "male"
}).then((res)=> console.log(res));
 */

server.listen(PORT,()=>{
    console.log(`Server running in Port: ${PORT}` );
});