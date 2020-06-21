let mongoose = require('mongoose');
var userDetailsSchema = new mongoose.Schema({
    email: String,
    verification: {
        isVerified:{
            type:Boolean,
            default:false
        },
        verificationCode:String
    },
        name: String,
        loginCheck:Boolean
});

module.exports = mongoose.model("userDetails", userDetailsSchema);
