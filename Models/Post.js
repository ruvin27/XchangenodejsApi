const mongoose = require("mongoose")

const Schema  = mongoose.Schema;
const Post = new Schema({
    email: String,
    name: String,
    phone: String,
    product: String,
    imagename: String,
    url: String,
    time: String,
    description: String

  });


module.exports = mongoose.model('Post', Post);
