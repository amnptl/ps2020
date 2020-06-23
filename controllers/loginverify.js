const UserDetails=require('./../models/userDetails');
module.exports= {
  verify : (req,res)=>
  {
    console.log(req.body);
    UserDetails.findOne({'email':req.body.email})
    .then(foundUser=>{
        if(!foundUser){
            console.log('user needs to signup first');
        }
        else{
          if(foundUser.verification.verificationCode===null){
            console.log("your otp must have expired, Try sending it again");
          }
          else{
            if (req.body.verificationcode === foundUser.verification.verificationCode) {
              UserDetails.findByIdAndUpdate(foundUser._id, { $set: { loginCheck: true } })
                .then(() => {
                  let data = {
                    loginCheck: true
                  }
                  res.json(data);
                })
                .then(() => { UserDetails.updateOne({ 'email': req.body.email }, { $set: { loginCheck: false } }) })
                .catch(err => {
                  console.log(err);
                  res.send(err);
                  UserDetails.findByIdAndUpdate(foundUser._id, { $set: { loginCheck: false } })
                });
            }
            else {
              let data = {
                loginCheck: false
              }
              res.json(data)
            }
          }
        }
    })
    .catch(err=>{
      console.log('error related to DB');
      console.log(err);
    })
  }
};
