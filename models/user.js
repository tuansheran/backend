const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    deviceId: {type: String, required: true},
    savedAffirmations: [String]
});


const User = mongoose.model('User', userSchema);

module.exports = User;