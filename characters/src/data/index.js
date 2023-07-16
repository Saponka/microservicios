const characters = require("./characters.json");
//traigo el json
const axios = require('axios');
//hago modelos de propiedades que van a contener functions
module.exports = {

    list: async ()=>{
        
        const results = await axios.get("http://database:8004/Character")
        return results.data;
    },

    create: async()=>{
       throw Error("hay un error en la DB al crear personaje ") 
    }
};