const nodemailer       =require('nodemailer');   

async function sendMail(mailContent) {
    // console.log(mailContent);
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: process.env.user,
            pass: process.env.pass // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'Platifi Jobs <platifi.jobs@gmail.com>', // sender address
        to: data_client.email, // list of receivers
        subject: "New Registration", // Subject line
        text: "Hello world?", // plain text body
        html: mailContent, // html body
    });
};

module.exports= sendMail;