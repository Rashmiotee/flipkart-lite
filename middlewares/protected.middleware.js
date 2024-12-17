const jwt = require("jsonwebtoken")
const User = require("../models/User")
exports.adminProtected = async (req, res, next) => {
    const admin = req.cookies.admin
    if (!admin) {
        return res.status(401).json({ message: "no cookies found" })
    }
    jwt.verify(admin, process.env.JWT_SECRET, (err) => {
        if (err) {
            console.log(err);
            return res.status(401).json({ message: "invalid token" })
        }
    })
    next()
}
exports.customerProtected = async (req, res, next) => {
    const User = req.cookies.User
    if (!User) {
        return res.status(401).json({ message: "no cookies found" })
    }
    jwt.verify(User, process.env.JWT_SECRET, async (err, decode) => {
        if (err) {
            console.log(err);
            return res.status(401).json({ message: "invalid token" })
        }
        const result = await User.findByid(decode._id)
        if (!result.isActive) {

            return res.status(401).json({ message: " Account Blocked by user" })
        }

        req.loggedInUser = decode._id
        next()
    })
}