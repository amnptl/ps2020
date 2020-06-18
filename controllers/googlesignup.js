let     express         =require('express'),
        bodyParser      =require('body-parser'),
        mongoose        =require('mongoose'),
        UserDetails     =require('./../models/userDetails'),
        app             =express();
var data_client;
module.exports= {
  create :(req,res) =>{
    data_client=req.body;
    var newUser={
        email:req.body.email,
        verification:{
            isVerified:true,
            verificationCode:"null"
        },
            name:req.body.name,
    };
    UserDetails.findOne({ email: req.body.email })
    .then((result) => {
        if (result != undefined) {
            console.log(result);
            let exists={
              alreadyExists:true
            }
            res.json(exists)
            console.log('returning true');
            return true;
        }
        else {
            console.log('returning false');
            let exists={
              alreadyExists:false
            }
            res.json(exists)
            return false;
        }
    })
    .then(alreadyExists=>{
        if (alreadyExists === true) {
            return res.send("email already exists");
        }
        else {
            UserDetails.create(newUser)
          }
        });
      }
    }
