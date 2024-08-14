const mongoose = require('mongoose');
const Affirmation = require('../models/affirmation');
const dotenv = require('dotenv');

dotenv.config();

const updateDocuments = async () =>{
    try{
        await Affirmation.updateMany({
            isFavourite: {$exist: false, $set: {isFavourite: false}}
        });
    }catch(err){
        console.log(err)
    }
};

const main = async () =>{
    try{
        const uri = process.env.URI;
        await mongoose.connect(uri).then(()=>console.log('connected')).catch(err=>console.log(err));
        await updateDocuments();
        console.log("success")
        mongoose.connection.close();
        
    }catch(err){
        console.log('err', err)
    };
};

main();