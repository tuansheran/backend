const mongoose = require('mongoose');

const affirmationSchema = new mongoose.Schema({
    text: { type: String, required: true }
});

const Affirmation = mongoose.model('Affirmation', affirmationSchema);

module.exports = Affirmation;