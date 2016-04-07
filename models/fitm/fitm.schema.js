;(function () {
  'use strict'
  var modelName = 'fitm'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    username: String,
    password: String,
    name: String,
    last_name: String,
    email: String,
    date: { type: Date, default: Date.now }
  })
  module.exports = mongoose.model(modelName, schema)
})()
