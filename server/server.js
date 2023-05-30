import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import multer from 'multer';
import {fileURLToPath} from 'url'
import path from 'path';

//Routes
import UserRoutes from './Routes/User.js';
import TaskRoutes from './Routes/Task.js';
import { Register } from './Controllers/User.js';

//Global variables
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


const app = express();
app.use(express.json()); //For post request parse json data
app.use(cors())
app.use(cookieParser());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets')
    },
    filename: (req, file, cb) => {
        const picturePath = new Date().toISOString().replace(/:/g, '-') + file.originalname
        require.body.picturePath = picturePath
        cb(null, picturePath)
    }
});

const upload = multer({storage})
dotenv.config()
const PORT = process.env.PORT || 5000;

//Register routes
app.use('/auth/register', upload.single('picture'), Register)
app.use('/auth', UserRoutes)
app.use('/task', TaskRoutes)

//Handling our errors globally
app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || "Something went wrong"
    return res.status(status).json({message})
})

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT, () =>{
        console.log(`App listening on port: ${PORT}`);
    })
}).catch(err => console.log(err))