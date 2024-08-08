const Affirmation = require('../models/affirmation');
const User = require('../models/user');

exports.getAffirmation = (req, res) => {
    res.send('Affirmations feed');
};

exports.saveAffirmations = async (req, res) => {
    try {
        const {deviceId, affirmation} = req.body;

        if(!deviceId | !affirmation){
            return res.status(400).json({message: 'data missing'});
        }

        const user = await User.findOne({deviceId});

        const newAffirmation = new Affirmation({text: affirmation});
        await newAffirmation.save();

        user.affirmations.push(newAffirmation._id);
        await user.save();

        return res.status(401).json({message: 'successful'});

    }catch{

    }
};

exports.removeAffirmation = (req, res) => {
    res.send('Affirmation removed');
};

exports.registerUser = async (req, res) => {
    
    const {newDeviceId} = req.body;

    if(!newDeviceId){
        return res.status(400).json({message: 'cannnot save user'});
    };

    const newUser = new User({deviceId: newDeviceId});
    await newUser.save();

    return res.status(201).json({message: 'successful'});
};
