const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: { type: String, require: true },
    price: { type: Number, require: true },
    desc: { type: String, require: true },
    hero: { type: [String], require: true },
    qty: { type: Number, require: true },
})

module.exports = mongoose.model("product", productSchema)