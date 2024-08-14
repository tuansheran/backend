const express = require('express');
const router = express.Router();
const affirmationsController = require('../controllers/affirmation');


router.get('/feed', affirmationsController.getAffirmation);
router.get('/savedAffirmations', affirmationsController.getSavedAffirmations);
router.post('/save', affirmationsController.saveAffirmations);
router.delete('/remove', affirmationsController.removeAffirmation);
router.post('/register', affirmationsController.registerUser);


module.exports = router;
