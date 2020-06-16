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
            return res.send('you otp must have expired try signing up again!');
        }
        console.log(foundUser);
        if (req.body.verificationcode===foundUser.verification.verificationCode)
        {
            UserDetails.findByIdAndUpdate(foundUser._id, { $set: { verification: { isVerified:true } } })
            .then(()=>{
                let data={
                  isVerified:true
                }
                console.log('mail verified');
                res.json(data)
            })
            .catch(err=>{
                console.log(err);
                res.send(err);
            });
        }
        else{
          let data={
            isVerified:false
          }
            res.json(data)
        }
    })
    .catch(err=>{
        console.log(err);
    })
  }
};
