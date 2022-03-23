const express = require('express');
const hobbiesController = require('../controllers/hobbies');
const router = express.Router();
router.get('/', hobbiesController.gethobbies);
router.post('/', hobbiesController.posthobbies);
router.delete('/:id', hobbiesController.deletehobbies);
module.exports = router;
