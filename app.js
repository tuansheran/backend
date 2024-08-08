const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const affirmationRouter = require('./routes/affirmation');


const app = express();
dotenv.config();

// middleware to parse JSON
app.use(express.json());

const uri = process.env.URI;
mongoose.connect(uri).then(()=>console.log('connected')).catch(err=>console.log(err));


app.use('/', affirmationRouter);


app.listen(3000, ()=>{
    console.log('on prot 3000');
})

