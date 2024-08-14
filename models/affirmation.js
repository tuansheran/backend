const mongoose = require('mongoose');

const affirmationSchema = new mongoose.Schema({
    isFavourite: {type: Boolean, default: false},
    text: { type: String, required: true }
});

const Affirmation = mongoose.model('Affirmation', affirmationSchema);

module.exports = Affirmation;