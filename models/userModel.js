const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email:{
    required:true,
    type:String,
    unique:true
  },
  password:{
    required:true,
    type:String,
    minlength:5
  },
  displayName:{
    type:String,
  }
})

module.exports = User = mongoose.model('user', userSchema)