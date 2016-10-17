var Pokemon = require ('../models/pokemon')
var Trainer = require ('../models/trainer')

var express = require ('express')
var router  = express.Router()

router.get('/'), function(req,res){
//
// Trainer.findOne({name:'Ash Ketchum'}, function(err,trainers){
//
// console.log('trainers are')
res.send("working");


// })


}

module.exports = Pokemon
