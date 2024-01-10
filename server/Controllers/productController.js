const Product = require("../Models/productModel");

const RegisterProduct = async (req, res) => {
    try {
        const userID = res.locals.payload.id;
        const file = req.file;
        const baseUrl = `${req.protocol}://${req.get('host')}`;
        const imageUrl = `${baseUrl}/uploads/${file.filename}`;
        const data = {
            user: userID,
            image: imageUrl,
            name: req.body.name,
            description: req.body.description
        }
        const product = await Product.create(data);
        if (product) {
            res.status(200).send('Product Registered Successfully');
        }
        else {
            res.status(400).send('Failed to register product');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
        throw error;
    }
};

const GetAllProducts = async (req, res) => {
    try {
        const products = await Product.find().populate('user');
        if (products && products.length > 0) {
            res.status(200).json(products);
        }
        else {
            res.status(404).send('No Approved Products Found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
        throw error;
    }
};

const GetAllApprovedProducts = async (req, res) => {
    try {
        const products = await Product.find({ status: "approved" }).populate('user');
        if (products && products.length > 0) {
            res.status(200).json(products);
        }
        else {
            res.status(404).send('No Approved Products Found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
        throw error;
    }
};

const GetUserProducts = async (req, res) => {
    try {
        const userID = res.locals.payload.id;
        const products = await Product.find({ user: userID });
        if (products && products.length > 0) {
            res.status(200).json(products);
        }
        else {
            res.status(404).send('No Products Found');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
        throw error;
    }
};


module.exports = {
    RegisterProduct,
    GetAllProducts,
    GetAllApprovedProducts,
    GetUserProducts,
};
