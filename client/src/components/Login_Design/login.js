import React from 'react';
import './css/main.css';
import './css/util.css';
import jQuery from 'jquery'
import GoogleLogin from "react-google-login";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
var mail;
var data;
const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">OTP expired</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};
const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase())
}
function resendOTP(){
  var element2=document.getElementById('email-div');
  element2.style.display='none';
  setTimeout(()=>{window.location.reload()},120000);
  fetch('http://localhost:3001/api/login',
    {
    method:'POST',
    headers:{
      'Content-Type': 'application/json;charset=utf-8'
    },
    body:JSON.stringify(data)
  })
  .then((res)=>res.json())
  .then((exists)=>{
    console.log(exists.alreadyExists);
    if(!exists.alreadyExists)
    {alert("No account found associated with this Email\nPlease Register to Continue");
      window.location.href='#/signup';
    }
    else {
      var x=document.getElementById('otp-div');
      x.style.display='block';
      var y=document.getElementById('otp-timer');
      y.style.display='block';
    }
  })
}
export class Login extends React.Component{
  constructor(props) {
  super(props);
  this.state = {
    email: '',
    otp: '',
    emailErr:'',
    otpErr:''
  };
}
myChangeHandler = (event) => {
  var nam = event.target.name;
  var val = event.target.value;
  this.setState({[nam]: val});
  if(nam=="email" && !validate(val) && val!="")
  {
    let emailErr="Invalid Email";
    this.setState({emailErr});
    var x=document.getElementById('otp-div');
    x.style.display='none';
    var y=document.getElementById('otp-timer');
    y.style.display='none';
  }
  else if(nam=="email" && validate(val))
  {
    let email_data={
      email:val.toLowerCase()
    }
    fetch('http://localhost:3001/api/login/check',
      {
      method:'POST',
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body:JSON.stringify(email_data)
    })
    .then((res)=>res.json())
    .then((exists)=>{
      console.log(exists.alreadyExists);
      if(!exists.alreadyExists)
      {
        let emailErr="Account does not exists\nPlease Register";
        this.setState({emailErr});
      }
      else {
        let emailErr="";
        this.setState({emailErr});
      }
    });
  }
  else if(nam=="otp" && val.length>=4)
  {
    data={
      email:document.getElementById('mail').value.toLowerCase(),
      verificationcode:val
    }
    fetch('http://localhost:3001/api/login/verify',
      {
      method:'POST',
      headers:{
        'Content-Type': 'application/json;charset=utf-8'
      },
      body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data.loginCheck);
      if(data.loginCheck)
      window.location.href='#/dashboard';
      else
      {
        let otpErr="Wrong OTP";
        this.setState({otpErr});
      }
    })
  }
  else {
    let emailErr="";
    this.setState({emailErr});
    let otpErr="";
    this.setState({otpErr});
  }
  }
  reset(e)
  {
  e.preventDefault();
  var signinbtn=document.getElementById('sinbtn');
  signinbtn.disabled=false;
  var element2=document.getElementById('mail');
  element2.disabled=false;
  var x=document.getElementById('otp-div');
  x.style.display='none';
  var y=document.getElementById('otp-timer');
  y.style.display='none';
  }
handleSubmit(e){
  e.preventDefault();
  var mail=document.getElementById('mail').value;
  if(validate(mail))
  {
    var signinbtn=document.getElementById('sinbtn');
    signinbtn.disabled=true;
    data={
      email:document.getElementById('mail').value
    }
    resendOTP();
  }
  else {
    alert("Enter Email");
  }
   }
   signup(res) {
     const googleresponse = {
       name: res.profileObj.name,
       email: res.profileObj.email,
       Image: res.profileObj.imageUrl
     };
     let google_data={
       email:googleresponse.email,
       name:googleresponse.name
     }
     fetch('http://localhost:3001/api/googleSignup',
       {
       method:'POST',
       headers:{
         'Content-Type': 'application/json;charset=utf-8'
       },
       body:JSON.stringify(google_data)
     })
     .then((res)=>res.json())
     .then((exists)=>{
       console.log(exists.alreadyExists);
       if(!exists.alreadyExists)
       {//alert("No account found associated with this Email\nPlease Register to Continue");
         window.location.href='#/createaccount';
       }
       else {
             window.location.href="#/dashboard";
       }
     })
   }
render(){
  const responseGoogle = (response) => {
        this.signup(response);
      }
mail=this.state.email;
  return (
    <html lang="en">
     <body>
     	<div class="limiter">
     		<div class="container-login100">
     			<div class="login100-more"><div className='image'/></div>
     			<div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
           <a href='/'><div className="logo"/></a>
     				<form class="login100-form validate-form">
     					<span class="login100-form-title p-b-59">
     						Sign In
                 <hr/>
                 <GoogleLogin
                 clientId="689118196122-o7v1jkou1ef2omo3ls7k59rljar911g0.apps.googleusercontent.com"
                 buttonText="Login with Google "
                 onSuccess={responseGoogle}
                 onFailure={responseGoogle}
                 cookiePolicy={"single_host_origin"}
                 />
         </span>
     					<div class="wrap-input100 validate-input" data-validate="Email is required" id="email-div">
     						<input class="input100" type="email" id="mail" name="email" placeholder="Email...." onChange={this.myChangeHandler}/>
                 {this.state.emailErr? <div className="danger">{this.state.emailErr}</div>:null}
     						<span class="focus-input100"></span>
     					</div>
     					<div class="wrap-input100 validate-input" data-validate = "Wrong OTP" id="otp-div">
     						<input class="input100" type="Password" id="otp" name="otp" placeholder="OTP...."  onChange={this.myChangeHandler}/>
                   {this.state.otpErr? <div className="danger">{this.state.otpErr}</div>:null}
     						<span class="focus-input100"></span>
     					</div>
               <div id="otp-timer">
               Please enter the OTP you received on your Email <label style={{color:'blue'}}>{mail}</label>
               <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          size={100}
          strokeWidth={7}
          duration={120}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
             </div>
     					<div class="container-login100-form-btn">
     						<div class="wrap-login100-form-btn">
     							<div class="login100-form-bgbtn"></div>
     							<button class="login100-form-btn" id="sinbtn" onClick={this.handleSubmit}>
     								Sign In
     							</button>
     						</div>
     						<a href="#/signup" class="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
     							Sign Up
     							<i class="fa fa-long-arrow-right m-l-5"></i>
     						</a>
     					</div>
     				</form>
     			</div>
     		</div>
     	</div>
     </body>
     </html>
  );
}
}

export default Login;
