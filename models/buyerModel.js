import mongoose from "../utils/db.js";

const Buyer = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    totalItems: {
        type: Number,
        required: true
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
        default: Date.now()
    }
})

export default mongoose.model('Buyer', Buyer);