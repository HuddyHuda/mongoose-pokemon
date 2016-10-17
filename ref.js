// Mongoose stuff
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/reference-ref')
mongoose.Promise = global.Promise

var Schema = mongoose.Schema

// write my models here
var citySchema = Schema({
  name: String
})

var userSchema = Schema({
  name: String,
  email: String,
  city: {
    type: Schema.Types.ObjectId,
    ref: 'City'
  }
})

var City = mongoose.model('City', citySchema)
var User = mongoose.model('User', userSchema)

// var sg = new City({
//   name: 'Singapore'
// })
//
// var ny = new City({
//   name: 'New York'
// })

// console.log(sg, ny)

// City.find({}, function (err, cities) {
//   console.log(cities)
// })

var sg = City.findOne({name: 'Singapore'})

sg.exec(function (err, res) {
  var prima = new User({
    name: 'Prima',
    email: 'primaulia@gmail.com',
    city: res.id
  })

  console.log(prima)

  prima.save()
})

// sg.save()
// ny.save()
