const {Schema}= require('mongoose');

const characterSchema = new Schema({
    _id: String,
    name:  String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld:{type :String, ref:"Planet"},//String referencia a el _id Planet
    films: [{type:String,ref:"Film"}]// Array de referencias a films
  
});
//creamos metodos al modelo: characterSchema.statics.<nommbre> = async function() {  return await this.<metodo> } 
//this apunta al Schema(characterSchema) .find() metodo de mongoose para buscar
//con la populacion a cada referencia con sus correspondientes campos
characterSchema.statics.list = async  function () {
  return await  this.find()
  .populate("homeworld",["_id","name"])
  .populate("films",["_id","title","director"])
};
characterSchema.statics.get = async function (id) {
  //findById || findOne
  //findOne({}) se le pasa un objeto con la propiedad por la queremos filtrar ej:_id, name ,etc
  //return await this.findOne({_id}) 
  return await this.findById(id)
  .populate("homeworld",["_id","name"])
  .populate("films",["_id","title","director"])
};
//crear character
characterSchema.statics.insert= async function (character) {
  return await this.create(character)
};
//borrar character
characterSchema.statics.delete= async function (id) {
  return await this.findByIdAndDelete(id);
};

module.exports = characterSchema;


