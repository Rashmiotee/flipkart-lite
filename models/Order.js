const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema({    // 👇 forgein key
    customer: { type: mongoose.Types.ObjectId, ref: "user", require: true },
    address: { type: String, require: true },
    city: { type: String, require: true },
    payment: { type: String, require: true },
    products: { type: [mongoose.Types.ObjectId], ref: "product", require: true },
    status: { type: String, enum: ["placed", "delivered", "cancel"], default: "placed" }, // in enum values  only this we can select 
}, { timestamps: true })  // creats  createdAt key updatedAt 

module.exports = mongoose.model("order", orderSchema)