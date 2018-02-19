const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const Employee = new Schema({
role : Enumerator('Boss', 'Developer', 'TA')

})