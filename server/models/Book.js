import mongoose from "mongoose";
const BookSchema = mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    author: {
        type:String,
        required: true,
    },
    language: {
        type:String,
        required:true,
    },
    category:{
        type:String,
        enums: ['default','reflexion','drama','historia','novela','comedia', 'amor', 'distopia','ciencia ficcion','fantasia'],
        default : 'default'
    },
    status: {
        type: String,
        enums: ['pending','reading', 'completing', 're-read'],
        default: 'pending'
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model('Book', BookSchema);
