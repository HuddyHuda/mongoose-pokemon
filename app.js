var express = require('express')
var app = express()
var port = 4000

// Mongoose stuff
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/family-tree')
mongoose.Promise = global.Promise

// write my models here
var childSchema = new mongoose.Schema({
  name: String,
  email: String
})

var parentSchema = new mongoose.Schema({
  name: String,
  email: String,
  children: [ childSchema ]
})

var Parent = mongoose.model('Parent', parentSchema)
var parent = new Parent({
  name: 'GlenZZZZ',
  email: 'glen@gmail.com3'
})

parent.children[0] = {
  name: 'Prima',
  email: 'primaulia@gmail.com'
}

parent.children.push({ name: 'Kailin' })

console.log(parent)

app.get('/create', function() {
  parent.save()
})

app.get('/findAll', function() {
  parent.save()
})

app.get('/findOne/:id', function() {
  parent.save()
})







app.listen(port)
console.log('Server is running at http://localhost:' + port)
