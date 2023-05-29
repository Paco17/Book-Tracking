import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import multer from 'multer';
import {fileURLToPath} from 'url'
import path from 'path';


const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT, () =>{
        console.log(`App listening on port: ${PORT}`);
    })
}).catch(err => console.log(err))