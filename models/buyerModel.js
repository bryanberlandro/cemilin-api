import mongoose from "../utils/db.js";

const Buyer = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    totalItems: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: false
    },
    optionPrice: {
        type: Number,
        required: false
    }, 
    totalPricePaid: {
        type: Number,
        required: true
    },
    totalChange: {
        type: Number,
        required: false
    },
    purchaseDate: {
        type: Date,
        required: true
    }
})

export default mongoose.model('Buyer', Buyer);