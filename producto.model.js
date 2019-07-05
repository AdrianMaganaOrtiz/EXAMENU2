const mongoose = require("mongoose");


module.exports = new mongoose.Schema({
    
    nombre:{
        type: String,
        required: true  
    },
    precio: {
        type: Number,
        required: true,
       
    },
    cantidad: {
        type: Number,
        required: true
    },
    min: {
        type: Number,
        required: true
    },

    max: {
        type: Number,
        required: true  
    },
    costo: {
        type: Number,
        required: true  
    }
});
