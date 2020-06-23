let     express         =require('express'),
        bodyParser      =require('body-parser'),
        randomString    =require('randomstring'),
        mongoose        =require('mongoose'),
        UserDetails     =require('./../models/userDetails'),
        nodemailer      =require('nodemailer'),
        app             =express(),
        sendMail        =require('./sendMail'),
        config          =require('./../config/config.js'),
        emailAuth       =require('../config/keys.js');
                        //  require('dotenv').config();
var data_client;
var data;
module.exports= {
  create :(req,res) =>{
    const otp = randomString.generate({
      length:4,
      charset:'numeric'
    });

    data_client=req.body;
    var newUser={
        email:req.body.email,
        verification:{
            isVerified:false,
            verificationCode:otp
        },
        name:req.body.name,
    };
    const mailToBeSent = `
    <h1>Hi ${data_client.name}! </h1> \
        <h1>Welcome to</h1><br>    \
        <a href= ${config.platifiJobsURL} ><img src="${config.platifiJobsLogo}" alt='Platifi Jobs'></a> \
        <p>Thanks for registering to Platifi Jobs. <br>In order to successfully verify your email, enter this OTP:<br> \
        <h1> ${otp}</h1><br> \
        <b>Note:</b> This is a system generated e-mail, kindly do not reply<br>
        <b>Contact Us:</b> <a href="mailto:${config.contactEmail}">email</a>
    `;

    UserDetails.findOne({ email: req.body.email })
    .then((result) => {
        if (result != undefined) {
            console.log(result);
            let exists={
              alreadyExists:true
            }
            // res.json(exists);
            console.log('returning true');
            return true;
        }
        else {
            console.log('returning false');
            let exists={
              alreadyExists:false
            }
            // res.json(exists);
            return false;
        }
    })
    .then(alreadyExists=>{
        if (alreadyExists === true) {
            return res.send("email already exists");
        }
        else {
            UserDetails.create(newUser)
            .then((createdUser) => {
                // send mail here
                sendMail(mailToBeSent)
                    .then(() => {
                      console.log(otp);
                        console.log('email has been sent!');
                        res.send('email has been sent');
                        setTimeout(() => {
                            console.log('calling delete functions');
                            UserDetails.findOne({ 'email': req.body.email })
                            .then((foundUser) => {
                                console.log(foundUser);
                                if (foundUser.verification.isVerified === false) {
                                    // delete the user
                                    console.log("user found unverified!");
                                    UserDetails.findOneAndDelete({ 'email': foundUser.email })
                                    .then(deletedUser => {
                                        console.log(deletedUser);
                                    })
                                    .catch(err => {
                                        console.log(err);
                                    });
                                }
                                else{
                                    console.log(`setting the verification code null`);
                                    UserDetails.findOneAndUpdate({'email' : foundUser.email},{$set: {verification : {isVerified:true , verificationCode:null}}})
                                    .then(updatedUser => {
                                        console.log(updatedUser);
                                    })
                                    .catch(err=>{
                                        console.log(err);
                                    })
                                }
                            })
                            .catch(err => {
                                console.log(err);
                            })
                        }, 125000);
                    })
                    .catch(err => {
                        console.log('error related to sending mail');
                        console.log(err);
                        UserDetails.findOne({ 'email': req.body.email })
                        .then((foundUser) => {
                            console.log(foundUser);
                            if (foundUser.verification.isVerified === false) {
                                // delete the user
                                console.log("user found unverified!");
                                UserDetails.findOneAndDelete({ 'email': foundUser.email })
                                .then(deletedUser => {
                                    console.log(deletedUser);
                                })
                                .catch(err => {
                                    console.log(err);
                                });
                            }
                            else {
                                console.log(`setting the verification code null`);
                                UserDetails.findOneAndUpdate({ 'email': foundUser.email }, { $set: { verification: { isVerified: true, verificationCode: null } } })
                                .then(updatedUser => {
                                    console.log(updatedUser);
                                })
                                .catch(err => {
                                    console.log(err);
                                })
                            }
                        })
                        .catch(err=>{
                            console.log("error related to DB");
                            console.log(err);
                        })
                    })
            })
            .catch((err) => {
                console.log(err);
            });
        }
    })
    .catch(err => {
        console.log(err);
        console.log('returning false from error statement');
        alreadyExists = true;
    });
  }
}

