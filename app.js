const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const affirmationRouter = require('./routes/affirmation');

const app = express();


//connect to db
mongoose.connect(process.env.URI).then(()=>console.log('connected to db')).catch((err)=>console.log(err));


//