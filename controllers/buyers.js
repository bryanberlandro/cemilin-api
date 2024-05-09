import Buyer from "../models/buyerModel.js"

export const getAllBuyers = async (req, res) => {
    try {
        const buyers = await Buyer.find({})
        res.json(buyers)
    } catch(err) {
        res.status(404).send({message: err.message})
    }
}

export const getBuyer = async (req, res) => {
    try {
        const buyers = await Buyer.findById(req.params.id)
        res.json(buyers)
    } catch(err) {
        res.status(404).send({message: err.message})
    }
}

export const addBuyer = async (req, res) => {
    const newBuyer = new Buyer(req.body)
    try {
        const insertedBuyer = await newBuyer.save();
        res.status(200).json(insertedBuyer);
    } catch(err){
        res.status(400).send({message: err.message})
    }
}

export const updateBuyer = async(req, res) => {
    try {
        const updatedBuyer = await Buyer.updateOne({_id: req.params.id}, {$set: req.body})
        res.status(200).json(updatedBuyer)
    } catch(err){
        res.status(400).send({message: err.message})
    }
}

export const deleteBuyer = async(req, res) => {
    try {
        const deletedBuyer = await Buyer.deleteOne({_id: req.params.id})
        res.status(200).json(deletedBuyer)
    } catch(err) {
        res.status(400).send({message: err.message})
    }
}