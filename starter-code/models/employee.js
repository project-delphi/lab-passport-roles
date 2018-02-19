const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const EmployeeSchema = new Schema({
  username: { type: String,required: true}
  password: { type: String,required: true}
  role    : { type: String, enum : ['Boss','Developer','TA'], default : 'TA'}
})

const Employee = mongoose.model('Employee', EmployeeSchema)