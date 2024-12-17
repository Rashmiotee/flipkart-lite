const { registerAdmin, loginAdmin, logoutAdmin, logincustomer, registercustomer, logoutcustomer } = require("../controller/auth.controller")
const router = require("express").Router()


router
    // .post("/admin/register", registerAdmin)
    .post("/admin/login", loginAdmin)
    .post("/admin/logout", logoutAdmin)

    .post("/customer/register", registercustomer)
    .post("/customer/login", logincustomer)
    .post("/customer/logout", logoutcustomer)

module.exports = router