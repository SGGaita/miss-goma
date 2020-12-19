const express = require('express');
const router = express.Router();
var multer = require('multer');
const {database} = require('../config/db_apiRoutes');
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

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '../client/src/assets/img/contestants');
        //callback(null, './uploads/img/team');
         //Use next line in production change path to ../public/assets/img/...
        //!callback(null, '../client/uploads');
    },
    filename: function (req, file, callback) {
        const prefix = "Miss-Goma"
        const filename = prefix + '-' + Date.now()
        callback(null, filename )
        //! use next line where no extension
        //callback(null, file.originalname + '.' + mime.getExtension(file.mimetype))
    }
});

//Multer Mime type validation
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Allowed only .png, .jpg, .jpeg and .gif'));
        }
    }
});
router.post('/contestant',upload.single('image'), async (req, res) => {

    console.log("request protocol", req.protocol)
    console.log("request protocol", req.get('host'))
    console.log("Date sent", new Date(req.body.date_of_birth))

    /**console.log("Contestant request body", req.body)*/

    //upload image first
      
// console.log("This route works",new Date(req.body.date_of_birth))
 // console.log("This route works",req.body.date_of_birth)
    database. table ( 'contestants' ) 
    . insert ( { 
        contestant_fname : req.body.contestant_fname,
        contestant_lname : req.body.contestant_lname,
        contestant_location: req.body.contestant_location,
        contestant_description: req.body.contestant_description,
        image: req.file.filename,
        date_of_birth: new Date(req.body.date_of_birth)
    } ) 
    . then ( (lastId)  =>  { 
      console.log ( lastId ) 
     // If there is no self-incrementing ID in the table structure, the return value will always be 0 
      res.json({
        message: `Contestant successfully added ${lastId}`,
        success: true,})
    }).catch(err => {res.json(err);
    console.log("This is the error generated", err)});

}) 

module.exports = router;