const express = require('express');
const router = express.Router();
const affrimationsController = require('../controllers/affirmation');

router.get('/feed', affrimationsController.getAffirmation);
router.post('/save', affrimationsController.saveAffirmations);
router.delete('/remove', affrimationsController.removeAffirmation);
router.post('/resgister', affrimationsController.registerUser);

module.exports.router;