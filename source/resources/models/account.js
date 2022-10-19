const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Schema = mongoose.Schema;

const accounts = new Schema({
    
    First_Name:{type: String,maxLength: 20, require: true,},
    Last_Name:{type: String,maxLength: 20, require: true,},
    Password:{type: String,maxLength: 20, require: true,},
    Password_Confirmation:{type: String,maxLength: 20, require: true,},
    Gender:{type: String, require: true,},
    Email:{type: String, maxLength: 255, require: true,},
    Phone:{type: Number,require: true,},
    slug:{type: String, slug:'Name', unique: true},

}, {timestamps: true})

module.exports= mongoose.model('accounts',accounts);
