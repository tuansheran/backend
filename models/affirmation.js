const mongoose = require('mongoose');

const affirmation = new mongoose.Schema({
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now } 
});