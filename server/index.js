import express from 'express';
import ConnectToDB from './db.js';
import authRouter from './routes/auth.js';
import addressRouter from './routes/addressRoute.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

ConnectToDB();
app.use(express.json());
app.use('/auth',authRouter);
app.use('/address',addressRouter);

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(port,()=>{
    console.log(`Server Running At http://localhost:${port}/`);
});

