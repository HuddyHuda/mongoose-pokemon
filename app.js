// var express = require('express')
// var app = express()
// var port = 4000
//
// // Mongoose stuff
// var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/family-tree')
// mongoose.Promise = global.Promise
//
// // write my models here
// var childSchema = new mongoose.Schema({
//   name: String,
//   email: String
// })
//
// var parentSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   children: [ childSchema ]
// })
//
// var Parent = mongoose.model('Parent', parentSchema)
// var parent = new Parent({
//   name: 'GlenZZZZ',
//   email: 'glen@gmail.com3'
// })
//
// parent.children[0] = {
//   name: 'Prima',
//   email: 'primaulia@gmail.com'
// }
//
// parent.children.push({ name: 'Kailin' })
//
// console.log(parent)
//
// app.get('/create', function() {
//   Parent.create({ name: 'Nurul Huda', email: 'huddyhuda@gmail.com' }, function(err, parents) {
//     if (err) return console.log(err);
//     console.log(parents);
//   });
// })
//
// app.get('/findAll', function() {
//   parent.save()
// })
//
// app.get('/findOne/:id', function() {
//   parent.save()
// })
//
//
//
// app.listen(port)
// console.log('Server is running at http://localhost:' + port)



// following primaulia

var mongoose = require ('mongoose')
var express = require ('express')


var Pokemon = require ('./models/pokemon')

var Trainer = require ('./models/trainer')

var trainerRoutes = require ('./routes/trainers')

mongoose.connect('mongodb://localhost/pokemon-farm')
mongoose.Promise = global.Promise

var app = express ()
var port = 4000

app.use('/trainers', trainerRoutes)

app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
