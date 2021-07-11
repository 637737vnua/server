const express = require('express');
const router = express.Router();
const ApiUserController = require('../controllers/ApiUserController');

router.get('/', ApiUserController.test);

module.exports = router;