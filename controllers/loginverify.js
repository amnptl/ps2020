const UserDetails=require('./../models/userDetails');
module.exports= {
  verify : (req,res)=>
  {
    console.log("Verifying....");
    console.log(req.body);
    UserDetails.findOne({'email':req.body.email})
    .then(foundUser=>{
        if(!foundUser){
            console.log("jdsbvjbfdsiv");
            return res.send('your otp must have expired try signing up again!');
        }
        console.log(foundUser);
        if (req.body.verificationcode===foundUser.verification.verificationCode)
        {
            UserDetails.findByIdAndUpdate(foundUser._id, { $set: {loginCheck:true } })
            .then(()=>{
                let data={
                  loginCheck:true
                }
                console.log('mail verified');
                res.json(data)
                UserDetails.findByIdAndUpdate(foundUser._id, { $set: {loginCheck:false } })
            })
            .catch(err=>{
                console.log(err);
                res.send(err);
                  UserDetails.findByIdAndUpdate(foundUser._id, { $set: {loginCheck:false } })
            });
        }
        else{
          let data={
            loginCheck:false
          }
          console.log('mail not verified');
            res.json(data)
        }
    })
    .catch(err=>{
        console.log(err);
    })
  }
};
