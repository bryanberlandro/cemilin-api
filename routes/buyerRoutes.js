import express from 'express';
import Buyer from '../models/buyerModel.js';
import { addBuyer, deleteBuyer, getAllBuyers, getBuyer, updateBuyer } from '../controllers/buyers.js';
const buyerRouter = express.Router();

buyerRouter.get('/buyers', getAllBuyers)
buyerRouter.get('/buyers/:id', getBuyer)
buyerRouter.post('/buyers', addBuyer)
buyerRouter.patch('/buyers/:id', updateBuyer)
buyerRouter.delete('/buyers/:id', deleteBuyer)

export default buyerRouter;