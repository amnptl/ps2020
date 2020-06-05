import React from 'react';
import './css/main.css';
import './css/util.css';
import jQuery from 'jquery'
import './js/main.js';
//import './js/map-custom.js';
function Login () {
  return (
    <html lang="en">
    <body >
    	<div class="limiter">
    		<div class="container-login100">
    			<div class="login100-more"><div className='image'/></div>

    			<div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
          <a href='./'><div className="logo"/></a>
    				<form class="login100-form validate-form">
    					<span class="login100-form-title p-b-59">
    						Sign In
    					</span>
    					<div class="wrap-input100 validate-input" data-validate="Username is required">
    						<span class="label-input100">Username</span>
    						<input class="input100" type="text" name="username" placeholder="Username..."/>
    						<span class="focus-input100"></span>
    					</div>

    					<div class="wrap-input100 validate-input" data-validate = "Password is required">
    						<span class="label-input100">Password</span>
    						<input class="input100" type="Password" name="pass" placeholder="*************"/>
    						<span class="focus-input100"></span>
    					</div>

    					<div class="container-login100-form-btn">
    						<div class="wrap-login100-form-btn">
    							<div class="login100-form-bgbtn"></div>
    							<button class="login100-form-btn">
    								Sign In
    							</button>
    						</div>

    						<a href="./signup" class="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">
    							Sign Up
    							<i class="fa fa-long-arrow-right m-l-5"></i>
    						</a>
    					</div>
    				</form>
    			</div>
    		</div>
    	</div>


    	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>

    	<script src="vendor/animsition/js/animsition.min.js"></script>

    	<script src="vendor/bootstrap/js/popper.js"></script>
    	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    	<script src="vendor/select2/select2.min.js"></script>

    	<script src="vendor/daterangepicker/moment.min.js"></script>
    	<script src="vendor/daterangepicker/daterangepicker.js"></script>

    	<script src="vendor/countdowntime/countdowntime.js"></script>

    	<script src="js/main.js"></script>

    </body>
    </html>

  );
}

export default Login;
