import express from 'express';
import { addProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../controllers/products.js';
const prodRouter = express.Router();

prodRouter.get('/products', getAllProducts)
prodRouter.post('/products', addProduct)

prodRouter.get('/products/:id', getProduct)
prodRouter.patch('/products/:id', updateProduct)
prodRouter.delete('/products/:id', deleteProduct)


export default prodRouter;