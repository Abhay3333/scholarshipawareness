const mongoose = require('mongoose');
// const validator = require('validator');

const adminSchema = new mongoose.Schema({
    
    email: {
        type:String,
        required : true,
        
       
    },
    password: {
        type:String,
        required : true
    }
})

const Admin = mongoose.model('admins', adminSchema);

module.exports = Admin ;