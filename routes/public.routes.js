const { getPublicProduct, getPublicProductDetails } = require("../controller/public.controller")


const router = require("express").Router()

router
    .get("/products", getPublicProduct)
    .get("/product-detail/:productId", getPublicProductDetails)

module.exports = router