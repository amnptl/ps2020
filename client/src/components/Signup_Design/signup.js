import React from 'react';
import './css/main.css';
import './css/util.css';
import jQuery from 'jquery'
//import './js/main.js';
var gen_otp="123ab"//from db
const validate = (email) => {
  const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return expression.test(String(email).toLowerCase())
}
export class Signup extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email: '',
      otp: '',
      nameErr:'',
      emailErr:'',
      otpErr:'',
      termsErr:''
    };
  }
  resendOTP(e){
    e.preventDefault();
    var resendbut=document.getElementById('resend');
    resendbut.disabled=true;
    setTimeout(()=>{resendbut.disabled = false;alert("ok!");},5000);
    var element1=document.getElementById('name');
    element1.disabled=true;
    var element2=document.getElementById('mail');
    element2.disabled=true;
  }
  myChangeHandler = (event) => {
    var nam = event.target.name;
    var val = event.target.value;
    this.setState({[nam]: val});
    if(nam=="name" && val=="")
    {
      let nameErr="Name is required";
      this.setState({nameErr});
    }
    else if(nam=="email" && !validate(val)&&val!="")
    {

      let emailErr="Invalid Email";
      this.setState({emailErr});
      var x=document.getElementById('otp-div');
      x.style.display='none';
      var y=document.getElementById('otp-timer');
      y.style.display='none';
    }
    else if(nam=="otp" && val.length>=5 && val!=gen_otp)
    {
      let otpErr="Invalid OTP";
      this.setState({otpErr});
    }
    else if(nam=="otp" && val==gen_otp)
    {
      window.location.href='./dashboard';
    }
    else {
      let nameErr="";
      this.setState({nameErr});
      let emailErr="";
      this.setState({emailErr});
      let otpErr="";
      this.setState({otpErr});
    }
  }
  checkbox_click(e){
    var checkbx=document.getElementById('ckb1').checked;
    if(checkbx)
    {
      document.getElementById('cbk1-error').style.display='none';
    }
    else {
      document.getElementById('cbk1-error').style.display='block';
    }
  }
  reset(e)
  {
    e.preventDefault();
    var signupbtn=document.getElementById('supbtn');
    signupbtn.disabled=false;
    var element1=document.getElementById('name');
    element1.disabled=false;
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
    var nameval=document.getElementById('name').value;
    var checkbx=document.getElementById('ckb1').checked;
    if(mail!="" && nameval!="" && checkbx)
    {
      var signupbtn=document.getElementById('supbtn');
      signupbtn.disabled=true;
      var resendbut=document.getElementById('resend');
      resendbut.disabled=true;
      setTimeout(()=>{resendbut.disabled = false;alert("ok!");},5000);
      var element1=document.getElementById('name');
      element1.disabled=true;
      var element2=document.getElementById('mail');
      element2.disabled=true;
      var x=document.getElementById('otp-div');
      x.style.display='block';
      var y=document.getElementById('otp-timer');
      y.style.display='block';
    }
    else if(checkbx==false)
    {
      document.getElementById('cbk1-error').style.display='block'
    }
    else {
      alert("Please enter valid details");
    }

  }
  render(){
    return (

      <html lang="en">
      <body >
      <div class="limiter">
      <div class="container-login100">
      <div class="login100-more"><div className="image1"/><div className="image1-util"/></div>
      <div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
      <a href='./'><div className="logo"/></a>
      <form class="login100-form validate-form">
      <span class="login100-form-title p-b-59">
      Sign Up
      <hr/>
      </span>
      <div class="wrap-input100 validate-input" >
      <input class="input100" type="text" id="name" name="name" placeholder="Name...." onChange={this.myChangeHandler}/>
      {this.state.nameErr? <div className="danger">{this.state.nameErr}</div>:null}
      <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input"  >
      <input class="input100" type="email" id="mail" name="email" placeholder="Email...." onChange={this.myChangeHandler}/>
      {this.state.emailErr? <div className="danger">{this.state.emailErr}</div>:null}
      <span class="focus-input100"></span>
      </div>
      <div class="wrap-input100 validate-input" data-validate = "Wrong OTP" id="otp-div">
      <input class="input100" type="Password" name="otp" placeholder="OTP...." onChange={this.myChangeHandler}/>
      {this.state.otpErr? <div className="danger">{this.state.otpErr}</div>:null}
      <span class="focus-input100"></span>
      </div>
      <div id="otp-timer">
      Please enter the OTP you received on your Email<label style={{color:'blue'}}> {this.state.email}</label>
      <h4>Circular Timer</h4>
      <button onClick={this.reset} className="reset_btns">Change Email </button>
      &nbsp;OR&nbsp;
      <button  id="resend" className="reset_btns" onClick={this.resendOTP}>Resend OTP</button>
      </div>
      <div class="flex-m w-full p-b-33">
      <div class="contact100-form-checkbox">
      <input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" onClick={this.checkbox_click}/>
      <label class="label-checkbox100" for="ckb1">
      <span class="txt1">
      I agree to the&nbsp;
      <a href="#" id="terms-checkbox" class="txt2 hov1">
      Terms of User
      </a>
      </span>
      </label>
      <div id="cbk1-error" className="danger">Please agree to the terms</div>
      </div>
      </div>
      <div class="container-login100-form-btn">
      <div class="wrap-login100-form-btn">
      <div class="login100-form-bgbtn"></div>
      <button class="login100-form-btn" id="supbtn" onClick={this.handleSubmit}>
      Sign Up
      </button>
      </div>
      <a href="./login" class="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
      Sign in
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
export default Signup;
