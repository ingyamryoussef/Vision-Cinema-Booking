var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var userSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        mobnumber:{
            type: String,
            required: false
        }
    }, {timestamps: true} );

    const User = mongoose.model('User' , userSchema)

    module.exports = User;