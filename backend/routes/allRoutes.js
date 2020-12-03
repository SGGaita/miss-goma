const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/userAuthController')


//1. Authentication Endpoints
// Register new Customer account
router.post('/register', authenticationController.addNewUser);
// Log into account
router.post('/login',authenticationController.loginUser)

module.exports = router;