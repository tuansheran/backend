const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const affirmationRouter = require('./routes/affirmation');


const app = express();
dotenv.config();

// middleware to parse JSON
app.use(express.json());

const uri = process.env.URI;

const connectToDB = async () =>{
    try{
        await mongoose.connect(uri).then(()=>console.log('connected')).catch(err=>console.log(err));
    }catch(err){
        console.log("cannot connect");
    };
};

//run app
app.use('/', affirmationRouter);
connectToDB();
app.listen(3000, ()=>{
    console.log('on prot 3000');
});

