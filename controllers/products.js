import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({})
        res.json(products)
    } catch(err){
        res.status(500).send({message: err.message});
    }
}

export const getProduct = async (req, res) => {
    try{
        const products = await Product.findById(req.params.id)
        res.json(products)
    } catch(err){
        res.status(404).send({message: err.message});
    }
}

export const addProduct = async (req, res) => {
    const newProduct = new Product(req.body)
    try{
        const insertedProduct = await newProduct.save();
        res.status(200).json(insertedProduct)
    } catch(err){
        res.status(400).send({message: err.message});
    }
}

export const updateProduct = async (req, res) => {
    try{
        const updatedProduct = await Product.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updatedProduct)
    } catch(err){
        res.status(400).send({message: err.message});
    }
}

export const deleteProduct = async (req, res) => {
    try{
        const deletedProduct = await Product.deleteOne({_id: req.params.id})
        res.status(200).json(deletedProduct)
    } catch(err){
        res.status(400).send({message: err.message});
    }
}