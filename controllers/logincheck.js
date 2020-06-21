let     express         =require('express'),
bodyParser      =require('body-parser'),
mongoose        =require('mongoose'),
UserDetails     =require('./../models/userDetails'),
app             =express();
var data_client;
module.exports= {
  check :(req,res) =>{
    data_client=req.body;
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
  }
}
