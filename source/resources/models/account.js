const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Schema = mongoose.Schema;

const accounts = new Schema({
    
    First_Name:{type: String,maxLength: 20, require: true,},
    Last_Name:{type: String,maxLength: 20, require: true,},
    Password:{type: String,maxLength: 20, require: true,},
    Phone:{type: Number,maxLength: 11, require: true,},
    Gender:{type: String, require: true,},
    Email:{type: String, maxLength: 255, require: true,},
    slug:{type: String, slug:'First_Name', unique: true},

}, {timestamps: true})

module.exports= mongoose.model('accounts',accounts);
