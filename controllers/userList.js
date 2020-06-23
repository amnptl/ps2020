const UserDetails =require('./../models/userDetails'),
      mongoose    =require('mongoose');

function findUsers(req,res) {
  UserDetails.find()
  .then(found_users=>{
    res.send(found_users);
  })
  .catch(err=>{
    res.send(err);
  })
}
module.exports= findUsers;
