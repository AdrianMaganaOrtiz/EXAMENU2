const mongoose = require("mongoose");

module.exports  = new mongoose.Schema({
    folio: {
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        required: true
    },
    prducto:{
        type: mongoose.Schema.Types.ObjectId, ref: 'producto'
    },
        
    cantidad: {
        type: Number,
        required: true
    },    
    subtotal: {
        type: Number,
        required: true
    },
    iva: {
        type: Number,
        require: true
    },
    total: {
        type: Number,
        required: true
    }


});

