const bcrypt = require("bcryptjs")
const Admin = require("../models/Admin")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const { sendEmail } = require("../utils/email")

exports.registerAdmin = async (req, res) => {
    const { email, password } = req.body
    const result = await Admin.findOne({ email })
    if (result) {
        return res.status(409).json({ message: "email already registerd" })
    }
    const hash = await bcrypt.hash(password, 10)
    await Admin.create({ ...req.body, password: hash })
    res.json({ message: "admin register success" })
}
exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body
    const result = await Admin.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "invalid credentials email" })
    }
    const isVerify = await bcrypt.compare(password, result.password)
    if (!result) {
        return res.status(401).json({ message: "invalid credentials password" })
    }
    const token = jwt.sign({ _id: result._id }, process.env.JWT_SECRET)
    res.cookie("admin", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true, secure: true })
    res.json({
        message: "admin login success",
        result: {
            _id: result._id,
            name: result.name,
            email: result.email
        }
    })
}

exports.logoutAdmin = async (req, res) => {
    res.clearCookie("admin")
    res.json({ message: "admin logout success" })
}

exports.registercustomer = async (req, res) => {

    try {

        const { email, password } = req.body
        const result = await User.findOne({ email })
        if (result) {
            return res.status(409).json({ message: "email already registerd" })
        }
        const hash = await bcrypt.hash(password, 10)
        await User.create({ ...req.body, password: hash })
        await sendEmail({
            to: email, subject: "welcome to flipkart-lite", message: ` 
            <h1>welcome,${req.body.name} <h1/>
            Thank you for joining Flipkart-lite! 
            
            ` })

        res.json({ message: "User register success" })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "unable to rewgister customer" })

    }
}
exports.logincustomer = async (req, res) => {
    const { email, password } = req.body
    const result = await User.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "invalid credentials email" })
    }
    const isVerify = await bcrypt.compare(password, result.password)
    if (!result) {
        return res.status(401).json({ message: "invalid credentials password" })
    }
    if (!result.isActive) {
        return res.status(401).json({ message: "Account Block" })
    }
    const token = jwt.sign({ _id: result._id }, process.env.JWT_SECRET)
    res.cookie("User", token, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true, secure: true })
    res.json({
        message: "User login success",
        result: {
            _id: result._id,
            name: result.name,
            email: result.email
        }
    })
}

exports.logoutcustomer = async (req, res) => {
    res.clearCookie("User")
    res.json({ message: "User logout success" })
}


//customerRegister
// customerLogin
// customerLogout
