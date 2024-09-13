'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    categoryId:{
        type:String
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    salary:{
        type: Number,
        require: true
    },
    price: {
        type: Number,
        required: true
    },
    position :{
        type: String, 
        required:true
    },
    active:{
        type:Boolean,
        required:true,
        default: true
    }
});

module.exports = mongoose.model('Product',schema );