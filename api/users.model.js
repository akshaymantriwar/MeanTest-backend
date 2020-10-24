var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var usersSchema = new Schema({
    firstName :{
        type: String,
        unique : false,
        required : true
    },
    lastName :{
        type: String,
        unique : false,
        required : true
    },
    email : {
        type: String,
        unique : true,
        required : true
    },
    phoneNumber: {
        type: Number,
        required : false
    },
    profileImageUrl: {
        type: String,
        required : false
    }
}, {
    timestamps: true
});

module.exports = usersSchema;
