const express = require("express")
const cors  = require("cors")
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { //Investiggate
    useNewUrlParser: true, //Invertigate
    useUnifiedTopology: true, //Investigate
}).then(() => {
    console.log("DB Connections Success")
}).catch(err => {
    console.log(err.message)
});

const server = app.listen(process.env.PORT, ()=> {
    console.log(`Server started on Port ${process.env.PORT}`);
})