"use strict";
const nodemailer = require("nodemailer");
var emailAuth=require("./config/keys").emailAuth;
var config=require("./config/config").config;

let transporter = nodemailer.createTransport(emailAuth);

/**
 * sends registration verification email
 * @param {dictionary} target - contains data about the reciepient of email. Should contain 2 keys namely name, email 
 * @param {int/string} OTP - The OTP to be sent
 */
async function registrationVerification(target, OTP){
    let info = await transporter.sendMail({
        from: `"Platifi Jobs" ${emailAuth.auth.user}`,
        to: target.email,
        subject: "Email Verification",
        html: `<h1>Hi ${target.name}!</h1> \
        <h1>Welcome to</h1><br>    \
        <a href= ${config.platifiJobsURL} ><img src= ${config.platifiJobsLogo} alt='Platifi Jobs'></a> \
        <p>Thanks for registering to Platifi Jobs. <br>In order to successfully verify your email, enter this OTP:<br> \
        <h1> ${OTP}</h1><br> \
        <b>Note:</b> This is a system generated e-mail, kindly do not reply<br>
        <b>Contact Us:</b> <a href="mailto:${config.contactEmail}">email</a>`
    })
    console.log("Message sent: %s", info.messageId);
}

/**
 * sends registration Completion email
 * @param {dictionary} target - contains data about the reciepient of email. Should contain 2 keys namely name, email 
 * @param {int/string} OTP - The OTP to be sent
 */
async function registrationCompleted(target){
    let info = await transporter.sendMail({
        from: `"Platifi Jobs" ${emailAuth.auth.user}`,
        to: target.email,
        subject: "Registration Complete ✔", 
        html: `<h1>Hi ${target.name}!</h1>
        <h1>Welcome to</h1>
        <a href= ${config.platifiJobsURL} ><img src= ${config.platifiJobsLogo} alt='Platifi Jobs'></a>
        <p>Thanks for verifying your email. <br>
        <p>Start by completing your <a href=${config.platifiJobsURLProfile}>profile</a>, It boosts your chance of getting a Job Offer significantly! </p><br>
        <b>Note:</b> This is a system generated e-mail, kindly do not reply<br>
        <b>Contact Us:</b> <a href="mailto:${config.contactEmail}">email</a>` 
      });
      console.log("Message sent: %s", info.messageId);
}

/**
 * sends login verification email
 * @param {dictionary} target - contains data about the reciepient of email. Should contain 2 keys namely name, email 
 * @param {int/string} OTP - The OTP to be sent
 */
async function loginVerification(target, OTP){
    let info = await transporter.sendMail({
        from: `"Platifi Jobs" ${emailAuth.auth.user}`,
        to: target.email,
        subject: "Login Verification ✔", 
        html: `<h1>Hi ${target.name}!</h1><br>
              You have requested to login to <a href= ${config.platifiJobsURL}>Platifi Jobs</a><br>
              Enter this OTP to successfully Log in:<br>
              <h1>${OTP}</h1><br>
              <b>Note: </b>This is a system generated email.<br>
              <a href= ${config.platifiJobsURL} ><img src= ${config.platifiJobsLogo} alt='Platifi Jobs'></a><br><br>
              <b>Contact Us:</b> <a href="mailto:${config.contactEmail}">email</a>
              `
    })
    console.log("Message sent: %s", info.messageId);
}
module.exports={
    registrationVerification: registrationVerification,
    registrationCompleted: registrationCompleted,
    loginVerification: loginVerification
}