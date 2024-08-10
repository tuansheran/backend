const Affirmation = require('../models/affirmation');
const User = require('../models/user');

exports.getAffirmation = async (req, res) => {
    try {
        // Retrieve 50 random affirmations
        const randomAffirmations = await Affirmation.aggregate([{ $sample: { size: 50 } }]);

        if (randomAffirmations.length > 0) {
            res.status(200).json(randomAffirmations);
        } else {
            res.status(404).json({ message: 'No affirmations found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving affirmations', error: err });
    }
};

exports.saveAffirmations = async (req, res) => {
    try {
        const {deviceId, affirmation} = req.body;

        if(!deviceId | !affirmation){
            return res.status(400).json({message: 'data missing'});
        }

        const user = await User.findOne({deviceId});

        user.savedAffirmations.push(affirmation);
        await user.save();

        return res.status(200).json({message: 'successful'});

    }catch(err){
        console.log(err);
    }
};

exports.removeAffirmation = async (req, res) => {
    
    try{
        const {deviceId, affirmation} = req.body;

        if(!deviceId | !affirmation){
            return res.status(400).json({message: 'data missing'});
        }

        const affirmationId = affirmation._id;
        const user = await User.findOne({deviceId});

        const affirmationIndex = user.savedAffirmations.findIndex(affirmation=> affirmation.id === affirmationId);

        user.savedAffirmations.splice(affirmationIndex, 1);

        await user.save();
        
        return res.status(204).json({message: 'resource removed sucessfully'});
    }catch(err){
        console.log("error occured:", err);
    };
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
