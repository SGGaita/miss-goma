const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');

const sendEmail= (req,res)=>{

    let _emailBody = req.body

    console.log("Let email body be email", _emailBody)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'gingergait06@gmail.com',
               pass: 'Waxmangme86'
           }
       });

       const mailOptions = {
        from: 'gingergait06@gmail.com', // sender address
        to: 'steveggaita@gmail.com', // list of receivers
        subject: 'Test email', // Subject line
        html: '<p>Your test email is here</p>'// plain text body
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log("Error is",err)
        else
          console.log(info);
     });
}

module.exports = {sendEmail}

