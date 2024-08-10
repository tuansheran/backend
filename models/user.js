const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    deviceId: {type: String, required: true},
    savedAffirmations: [Object]
});


const User = mongoose.model('User', userSchema);

module.exports = User;