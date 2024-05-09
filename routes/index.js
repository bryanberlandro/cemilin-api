import express from 'express';
import prodRouter from './productsRoutes.js';
import buyerRouter from './buyerRoutes.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.send("end point : /products, /buyer")
})
router.use(prodRouter)
router.use(buyerRouter)

export default router;