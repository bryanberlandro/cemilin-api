import mongoose from "../utils/db.js";

const Product = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    pieces: {
        type: Number,
        required: true
    }, 
    exp_date: {
        type: Date,
        default: Date.now,
        required: false
    }
})


export default mongoose.model('Products', Product)
