const mongoose = require('mongoose');

const PostagemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    content: {
        type: String,
        validate: {
            validator: function(value) {
                return value.trim().length > 0;
            },
            message: 'Content cannot be only whitespace'
        },
        trim: true,
        required: true
    },
    like: {
        type: Number,
        default: 0
    },
    
    timeStamp: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Postagens', PostagemSchema)