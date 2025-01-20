const Product = require("./../models/Product")

const addProduct = async (req, res) => {
    const { name, price, description, stock } = req.body
    try {
        const productObj = new Product({
            name,
            price,
            description,
            stock
        })

        const product = await productObj.save()
        return res.status(201).json({
            success: true,
            message: "Product aded",
            data: product
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({
            success: false,
            message: "Fecth success",
            data: products
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const updateProduct = async (req, res) => {
    const productId = req.params.id
    const { name, price, description, stock } = req.body
    try {

        const payLoad = {}
        if (name) payLoad.name = name
        if (price) payLoad.price = price
        if (description) payLoad.description = description
        if (stock) payLoad.stock = stock

        const product = await Product.findByIdAndUpdate(
            productId, payLoad, { new: true });
        return res.status(200).json({
            success: true,
            message: "Product updated",
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const deleteProduct = async (req, res) => {
    const productId = req.params.id
    try {
        await Product.findByIdAndDelete(productId);
        return res.status(200).json({
            success: true,
            message: "Product deleted"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = {
    addProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
}