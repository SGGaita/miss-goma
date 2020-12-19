const express = require('express');
const router = express.Router();

const {database} = require('../config/db_apiRoutes');


//Get all contestants
const getAllContestants = (req, res)=> { // Sending Page Query Parameter is mandatory http://localhost:3636/api/products?page=1
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
    const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10; // set limit of items per page
    let startValue;
    let endValue;
    if (page > 0) {
        startValue = (page * limit) - limit; // 0, 10, 20, 30
        endValue = page * limit; // 10, 20, 30, 40
    } else {
        startValue = 0;
        endValue = 10;
    }

    console.log("All contestants")
    database.table('contestants as c')
        .withFields(['c.id_contestant',
            'c.contestant_fname',
            'c.contestant_lname',
            'c.contestant_location',
            'c.contestant_description',
            'c.image',
            'c.date_of_birth',

        ])
        .slice(startValue, endValue)
        .sort({
            id_contestant: .1
        })
        .getAll()
        .then(contest => {
            if (contest.length > 0) {
                res.status(200).json({
                    count: contest.length,
                    contestants: contest
                });
            } else {
                res.json({
                    message: "No contestants were found"
                });
            }
        })
        .catch(err => console.log(err));
}

//Get contestant by contestant id
const getContestantById = (req, res) => {
    let contestantId = req.params.contestId;
    database.table('contestants as c')
    .withFields(['c.id_contestant',
    'c.contestant_fname',
    'c.contestant_lname',
    'c.contestant_location',
    'c.contestant_description',
    'c.image',
    'c.date_of_birth',
    ])
        .filter({
            'c.id_contestant': contestantId
        })
        .get()
        .then(contestant => {
            console.log(contestant);
            if (contestant) {
                res.status(200).json(contestant);
            } else {
                res.json({
                    message: `No contestant found with id ${contestantId}`
                });
            }
        }).catch(err => res.json(err));
}

// Add new Contestant
/**const addNewContestant = async (req, res) => {

    console.log("Contestant request body", req.body)
      
  



    
    
    console.log("This route works",new Date(req.body.date_of_birth))
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

}*/




module.exports = {getAllContestants, getContestantById}