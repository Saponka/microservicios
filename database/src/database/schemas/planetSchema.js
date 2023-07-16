const {Schema}= require('mongoose');

const planetSchema = new Schema({
    _id: String,
    "name": String,
      "rotation_period": String,
      "orbital_period": String,
      "diameter": String,
      "climate": String,
      "gravity": String,
      "terrain": String,
      "surface_water":String,
      "res_idents": [{type:String,ref:"Character"}],
      "films": [{type:String,ref:"Film"}]
});

planetSchema.statics.list = async function(){
  return await this.find().populate("res_idents",["_id","name"]).populate("films",["_id","title"]);
};

planetSchema.statics.get = async function (id) {
  //findById || findOne
  //findOne({}) se le pasa un objeto con la propiedad por la queremos filtrar ej:_id, name ,etc
  //return await this.findOne({_id}) 
  return await this.findById(id)
  .populate("res_idents",["_id","name"])
  .populate("films",["_id","title"])
};
//crear character
planetSchema.statics.insert= async function (planet) {
  return await this.create(planet)
};
//borrar character
planetSchema.statics.delete= async function (id) {
  return await this.findByIdAndDelete(id);
};
module.exports = planetSchema;