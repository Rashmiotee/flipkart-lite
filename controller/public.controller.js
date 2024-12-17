const Product = require("../models/Product")

exports.getPublicProduct = async (req, res) => {
    const result = await Product.find()
    res.json({ message: "product get success", result })
}
exports.getPublicProductDetails = async (req, res) => {
    const result = await Product.findById(req.params.productId)
    res.json({ message: "product details fetch success", result })
}
