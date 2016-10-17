//this is for referencing

var mongoose = require ('mongoose')

var pokemonSchema = mongoose.Schema({

name: String,
type: String,
power: Number,
trainer_id:{
  type: mongoose.Schema.Types.ObjectId, //can refer to object ID
  ref: 'Trainer'
}

})

var Pokemon = mongoose.model ('Pokemon', pokemonSchema)

module.exports = Pokemon
