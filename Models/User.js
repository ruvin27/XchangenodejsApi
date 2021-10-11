var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
    name: String,
    email: String,
    phone: String,
    uid: String
});

module.exports = mongoose.model('User', User);