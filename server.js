let     express         =require('express'),
        bodyParser      =require('body-parser'),
        mongoose        =require('mongoose'),
        UserDetails     =require('./models/userDetails'),
        app             =express(),
        Signup          =require('./controllers/signup'),
        UserList        =require('./controllers/UserList'),
        Verify          =require('./controllers/verify'),
        VerifyEmail     =require('./controllers/verifyEmail');
        path            =require('path');
        cors            =require('cors');
        Router          =express.Router();
mongoose.connect('mongodb://localhost/apiTest', { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});
// body parser middleware
app.use(express.static(path.join(__dirname, "./client/","build")));
//app.use(express.static(path.join(__dirname, "./client/","public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
UserDetails.find()
.then( users => {
    for(i=0;i<users.length;i++){
        if(!users[i].verification.isVerified){
            UserDetails.findByIdAndRemove(users[i]._id)
            .catch(err=>{
                console.log("this is "+ err);
            });
        }
    }
});
app.post('/api/signup',Signup.create);
app.get('/api/users',UserList.users);
app.post('/api/signup/verify',Verify.verify);
app.post('/api/verifyEmail',VerifyEmail.verifyemail);
//app.post('/api/login',Login.verifylogin)
app.listen(3001, ()=>{
    console.log('listening on the port 3001');
});
