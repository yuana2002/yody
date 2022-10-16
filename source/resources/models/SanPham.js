const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Schema = mongoose.Schema;

const sanphams = new Schema({
    
    Name:{type: String, require: true,},
    Price:{type: Number, require: true,},
    Distribute:{type: String,},
    Gender:{type: String,},
    Description:{type: String, maxLength: 255, require: true,},
    image:{type: String},
    slug:{type: String, slug:'Name', unique: true},

}, {timestamps: true})

module.exports= mongoose.model('sanphams',sanphams);
