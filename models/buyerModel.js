import mongoose from "../utils/db.js";

const ProductSchema = mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number
});

const Buyer = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    products: [ProductSchema],
    totalPrice: {
        type: Number,
        required: false
    },
    status: {
        type: String,
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
        required: true
    }
})

export default mongoose.model('Buyer', Buyer);