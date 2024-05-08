import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import prodRouter from './routes/productsRoutes.js';

const app = express();

const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(cors())
app.use(prodRouter)

app.listen(PORT, () => console.log(`Connected to port http://localhost:${PORT}`))