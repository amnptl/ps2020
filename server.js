let     express         =require('express'),
        bodyParser      =require('body-parser'),
        mongoose        =require('mongoose'),
        UserDetails     =require('./models/userDetails'),
        app             =express(),
        Signup          =require('./controllers/signup'),
        Login           =require('./controllers/login'),
        UserList        =require('./controllers/UserList'),
        Verify          =require('./controllers/verify'),
        loginverify     =require('./controllers/loginverify'),
        logincheck      =require('./controllers/logincheck'),
        VerifyEmail     =require('./controllers/verifyEmail'),
        path            =require('path'),
        cors            =require('cors'),
        googleSignup    =require('./controllers/googlesignup'),
        googleLogin     =require('./controllers/googlelogin'),
        UserData        =require('./controllers/userData'),
        Router          =express.Router(),
        mongoURI        =require('./config/keys').mongoURI;


mongoose.connect(mongoURI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});
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
        else{
            UserDetails.findOneAndUpdate({'email' : users[i].email}, { $set: { verification: { isVerified: true, verificationCode: null } } })
            .then(updatedUser => {
                console.log(updatedUser);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
});

app.post('/api/signup',Signup.create);
app.post('/api/login',Login.login);
app.get('/api/users',UserList);
app.post('/api/userData/updateDetails', UserData.updateDetails);
app.post('/api/userData/getDetails', UserData.getDetails);
app.post('/api/signup/verify',Verify.verify);
app.post('/api/login/check',logincheck.check);
app.post('/api/login/verify',loginverify.verify);
app.post('/api/verifyEmail',VerifyEmail.verifyemail);
app.post('/api/googlesignup',googleSignup.create);
app.post('/api/googlelogin',googleLogin.verify);
app.listen(3001, ()=>{
    console.log('listening on the port 3001');
});
