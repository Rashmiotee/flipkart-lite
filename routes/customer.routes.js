const { placeOrder, fetchCustomerOrders } = require("../controller/customer.controller")


const router = require("express").Router()

router

    .post("/place-order", placeOrder)
    .get("/order-history", fetchCustomerOrders)


module.exports = router
