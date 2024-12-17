// product ka curd 

const { upload } = require("../utils/upload")
const Product = require("../models/Product")
const path = require("path")
const User = require("../models/User")

const cloudinary = require("cloudinary").v2
cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME

})
exports.addProduct = async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            console.log(err);
            return res.status(400).json({ message: "unable to uplaod" })
        }
        if (req.files) {
            // const allImages = []
            // for (const item of req.files) {
            //     const { secure_url } = await cloudinary.uploader.upload(item.path)
            //     allImages.push(secure_url)
            // }

            // console.log(allImages);

            //all promises
            const allImages = []
            const heros = []
            for (const item of req.files) {
                allImages.push(cloudinary.uploader.upload(item.path))
            }
            const data = await Promise.all(allImages)
            for (const item of data) {
                heros.push(item.secure_url);

            }
            await Product.create({ ...req.body, hero: heros })
            res.json({ message: "product add success" })
        } else {

            res.status(400).json({ message: "hero img require" })
        }
    })
}
exports.getProduct = async (req, res) => {
    const result = await Product.find()
    res.json({ message: "product get success", result })



}
exports.updateProduct = async (req, res) => {
    upload(req, res, async err => {
        try {

            const allImages = []
            if (req.files && req.files.length > 0) {
                // else {
                // only upload new img 
                for (const item of req.files) {
                    const { secure_url } = await cloudinary.uploader.upload(item.path)
                    allImages.push(secure_url)
                }
                // }
            }
            const oldProduct = await Product.findById(req.params.productID)
            if (req.body.remove) {
                // img remove 
                const result = oldProduct.hero.filter(item => !req.body.remove.includes(item))  //isme aagar 2 images aaye toh remove karne ke liye use karte hai 
                oldProduct.hero = result
                if (typeof req.body.remove === "string") {

                    await cloudinary.uploader.destroy(path.basename(req.body.remove, path.extname(req.body.remove)))
                } else {
                    for (const item of req.body.remove) {

                        await cloudinary.uploader.destroy(path.basename(item))
                    }
                }
            }

            //change only data 

            await Product.findByIdAndUpdate(req.params.productID, {
                ...req.body,
                hero: [...oldProduct.hero, ...allImages]
            })
            // await Product.findByIdAndUpdate(req.params.productID, req.body)
            res.json({ message: "product update success" })
        } catch (error) {

            console.log(error);
            res.status(400).json({ message: "somethig went rong" })
        }
    })




}
exports.deleteProduct = async (req, res) => {
    try {

        const result = await Product.findById(req.params.productID)
        //step 1 cloudinary /AWS S3
        console.log(result);

        for (const item of result.hero) {
            await cloudinary.uploader.destroy(path.basename(item, path.extname(item)))
        }
        await Product.findByIdAndDelete(req.params.productID)
        res.json({ message: "product delete success" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "error" })
    }
}
exports.adminUserFetch = async (req, res) => {
    try {
        const total = await User.countDocuments()
        const { skip, limit } = req.query
        const result = await User.find().skip(skip).limit(limit)
        res.json({ message: "user fetch success", result, total })
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "unable to fectch " })

    }
}
exports.adminBlockUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.uid, { isActive: false })
        res.json({ message: "user Block success" })
    } catch (error) {
        console.log(error);

        res.status(400).json({ message: "unable to Block " })

    }
}
exports.adminBlockUnBlockUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.uid, { isActive: req.body.isActive })
        res.json({ message: "user Block success" })
    } catch (error) {
        console.log(error);

        res.status(400).json({ message: "unable to Block " })

    }
}



