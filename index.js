import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import prodRouter from './routes/productsRoutes.js';
import router from './routes/index.js';

const app = express();

app.use(cors(
    {
        origin: ['https://cemilin-api.vercel.app/', 'http://localhost:5173', 'https://cemilin-overview.vercel.app'],
        methods: ["POST", "GET", "PATCH", "DELETE"],
        credentials: true
    }
))

app.use(express.json())
app.use(router)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Connected to port http://localhost:${PORT}`))