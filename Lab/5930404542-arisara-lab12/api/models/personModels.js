'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    name: {
        type: String,
        require: 'enter name'
    },
    weight: {
        type:String,
        require: 'enter weight'
    },
    country:{
        type: [{
            type: String,
            enum: ['Thailand','China','USA']
        }],
        default:['Thailand']
    }
});

module.exports = mongoose.model('Person',PersonSchema);