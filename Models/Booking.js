const mongoose = require("mongoose")

const Schema  = mongoose.Schema;
const Booking = new Schema({
    seller: String,
    buyer: String,
    notified: String,
    productID: String,
    product: String,
    buyername: String,
    time: String,

  });


module.exports = mongoose.model('Booking', Booking);
const mongoose = require("mongoose")

const Schema  = mongoose.Schema;
const Booking = new Schema({
    seller: String,
    buyer: String,
    notified: String,
    productID: String,
    product: String,
    buyername: String,
    time: String,

  });


module.exports = mongoose.model('Booking', Booking);
