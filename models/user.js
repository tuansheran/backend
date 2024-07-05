const mongoose = require('mongoose');

const user = mongoose.Schema({
    deviceId: {type: String, required: true},
    savedAffirmations: [String]
});