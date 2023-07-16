const {Schema}= require('mongoose');

const filmSchema = new Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date:Date,
    characters: [
        {type :String, ref:"Character"}
    ],
    planets: [{type :String, ref:"Planet"}]
});

filmSchema.statics.list = async function(){
    return await this.find().populate("characters",["_id","name"]).populate("planets",["_id","name"]);
};
////////////////////
filmSchema.statics.get = async function (id) {
  //findById || findOne
  //findOne({}) se le pasa un objeto con la propiedad por la queremos filtrar ej:_id, name ,etc
  //return await this.findOne({_id}) 
  return await this.findById(id)
  .populate("characters",["_id","name"])
  .populate("planets",["_id","name"])
};
//crear character
filmSchema.statics.insert= async function (film) {
  return await this.create(film)
};
//borrar character
filmSchema.statics.delete= async function (id) {
  return await this.findByIdAndDelete(id);
};




module.exports = filmSchema;