const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type: String,
        required: true,
    },
    password:{
        type:String,
        required: true
    },
    status:{
        type:String,
        default: 'employee'
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User