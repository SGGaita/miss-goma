const express = require('express');
const router = express.Router();
const authenticationController = require('../controllers/userAuthController')
const emailController = require('../controllers/emailController')
const contestantsController = require('../controllers/contestantsController')


//1. Authentication Endpoints
// Register new Customer account
router.post('/register', authenticationController.addNewUser);
// Log into account
router.post('/login',authenticationController.loginUser);

//Send email
router.post('/email', emailController.sendEmail);



//2. Contestants end points
//get all contestants
router.get('/contestants', contestantsController.getAllContestants)
//get contestant by id
router.get('/contestant/:contestId', contestantsController.getContestantById)
//post contestants
router.post('/contestant', contestantsController.addNewContestant)

module.exports = router;