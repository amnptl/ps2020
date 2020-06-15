let     express         =require('express'),
        bodyParser      =require('body-parser'),
        randomString    =require('randomstring'),
        mongoose        =require('mongoose'),
        UserDetails     =require('./../models/userDetails'),
        nodemailer      =require('nodemailer'),
        app             =express();
module.exports= {
  create :(req,res) =>{
    const otp = randomString.generate({
      length:10,
      charset:'numeric'
    });
    var newUser={
        email:req.body.email,
        verification:{
            isVerified:false,
            verificationCode:otp
        },
        details:{
            name:req.body.name,
            phoneNumber: req.body.phoneNumber,
            dateOfBirth:req.body.dateOfBirth,
            resumeLink:req.body.resumeLink
        }
    };

    const mailToBeSent = `
    <h1>Hi ${target.name}!</h1> \
        <h1>Welcome to</h1><br>    \
        <a href= ${config.platifiJobsURL} ><img src= ${config.platifiJobsLogo} alt='Platifi Jobs'></a> \
        <p>Thanks for registering to Platifi Jobs. <br>In order to successfully verify your email, enter this OTP:<br> \
        <h1> ${otp}</h1><br> \
        <b>Note:</b> This is a system generated e-mail, kindly do not reply<br>
        <b>Contact Us:</b> <a href="mailto:${config.contactEmail}">email</a>
    `;

    UserDetails.findOne({ email: req.body.email })
    .then((result) => {
        if (result != undefined) {
            console.log(result);
            console.log('returning true');
            return true;
        }
        else {
            console.log('returning false');
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
                        console.log('email has been sent!');
                        res.send('email has been sent');
                        setTimeout(() => {
                            console.log('calling delete functions');
                            UserDetails.findOne({ 'email': req.body.email })
                            .then((foundUser) => {
                                console.log(foundUser);
                                if (foundUser.verification.isVerified == false) {
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
                            })
                            .catch(err => {
                                console.log(err);
                            })
                        }, 130000);
                    })
                    .catch(err => {
                        console.log(err);
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
async function sendMail(mailContent) {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "", // generated ethereal user
            pass: "" // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'Nodemailer ', // sender address
        to: "Nodemailer ", // list of receivers
        subject: "nodemailer test", // Subject line
        text: "Hello world?", // plain text body
        html: mailContent, // html body
    });
};
