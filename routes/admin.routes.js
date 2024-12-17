const { getProduct, addProduct, updateProduct, deleteProduct, adminUserFetch, adminBlockUnBlockUser } = require("../controller/admin.controller")

const router = require("express").Router()

router
    .get("/product", getProduct)
    .post("/product/add", addProduct)
    .put("/product/update/:productID", updateProduct)
    .delete("/product/delete/:productID", deleteProduct)
    .get("/user/fetch", adminUserFetch)
    .put("/user/block/:uid", adminBlockUnBlockUser)

module.exports = router