import React from 'react'
import './createAccount.css'
function createAccount(){
  return (
    <div className="container">
    <div className="logo-container"/>
    <div className="wrapper">
    <h3>No account found associated with this Email</h3>
    <h4>Do you want to create a Account?</h4>
    <br/>
    <button className="cancel-btn" onClick={()=>window.location.href='./'}>Cancel</button>
    &nbsp;
    <button className="create-btn" onClick={()=>window.location.href='./#/dashboard'}>Create Account</button>
    </div>
    </div>
  );
}
export default createAccount;
