import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import prodRouter from './routes/productsRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors(
    {
        origin: ['http://localhost:5173'],
        methods: ["POST", "GET", "PATCH", "DELETE"],
        credentials: true
    }
))

app.use(express.json())
app.use(prodRouter)

app.listen(PORT, () => console.log(`Connected to port http://localhost:${PORT}`))