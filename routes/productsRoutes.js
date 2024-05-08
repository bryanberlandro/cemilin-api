import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getProduct } from '../controllers/products.js';
const prodRouter = express.Router();

prodRouter.get('/products', getAllProducts)
prodRouter.get('/products/:id', getProduct)
prodRouter.post('/products', addProduct)
prodRouter.delete('/products/:id', deleteProduct)


export default prodRouter;