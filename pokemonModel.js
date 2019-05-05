const mongoose = require('mongoose'),
      pokemonSchema = new mongoose.Schema({
          name:{
              type:String,
              required:true
          },
          type:{
              type:String,
              required:true
          }
      }),
      pokemonModel = mongoose.model('pokemon',pokemonSchema);
module.exports = pokemonModel;