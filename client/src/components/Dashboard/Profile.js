import React, { Component } from "react";    
import './Profile.css'    
    
class Profile extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            studName: '',    
            emailId: '',    
            dob: '',    
            gender: 'select',
            address:'',    
            phoneNumber: '',    
            
            changePassword:'', 
            resume:'',   
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const {  dob, gender,address, phoneNumber,  changePassword, resume } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
    
            
    
        //DOB    
        if (!dob) {    
            formIsValid = false;    
            formErrors["dobErr"] = "Date of birth is required.";    
        }    
        else {    
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;    
            if (!pattern.test(dob)) {    
                formIsValid = false;    
                formErrors["dobErr"] = "Invalid date of birth";    
            }    
        }    
    
        //Gender    
        if (gender === '' || gender === "select") {    
            formIsValid = false;    
            formErrors["genderErr"] = "Select gender.";    
        }   
        
        
        if (!address) {    
            formIsValid = false;    
            formErrors["addressErr"] = "Address is required.";    
        }
    
        //Phone number    
        if (!phoneNumber) {    
            formIsValid = false;    
            formErrors["phoneNumberErr"] = "Phone number is required.";    
        }    
        else {    
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;    
            if (!mobPattern.test(phoneNumber)) {    
                formIsValid = false;    
                formErrors["phoneNumberErr"] = "Invalid phone number.";    
            }    
        }    
    
            
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {    
        e.preventDefault();    
    
        if (this.handleFormValidation()) {    
            alert('You have been successfully registered.')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const {  dobErr, genderErr, addressErr, phoneNumberErr } = this.state.formErrors;    
    
        return (    
            <div className="formDiv">    
                <h2 style={{ textAlign: "center" }} >Fill your information below </ h2>    
                <div>    
                    <form onSubmit={this.handleSubmit}>    
                        
                        <div>    
                            <label htmlFor="text">Birth Date</label>    
                            <input type="text" name="dob"    
                                value={this.state.dob}    
                                onChange={this.handleChange}    
                                placeholder="DD/MM/YYYY.."    
                                className={dobErr ? ' showError' : ''} />    
                            {dobErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>    
                            }    
                        </div>    
                        <div>    
                            <label htmlFor="gender">Gender</label>    
                            <select name="gender" onChange={this.handleChange}    
                                className={genderErr ? ' showError' : ''}    
                                value={this.state.gender} >    
                                <option value="select">--Select--</option>    
                                <option value="male">Male</option>    
                                <option value="female">Female</option>    
                                
                            </select>    
                            {genderErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{genderErr}</div>    
                            }    
                        </div>

                        <div>    
                            <label htmlFor="address">Address</label>    
                            <input type="text" name="address"    
                                value={this.state.address}    
                                onChange={this.handleChange}    
                                placeholder="Your Address."    
                                className={addressErr ? ' showError' : ''} />    
                            {addressErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{addressErr}</div>    
                            }    
    
                        </div>

                        <div>    
                            <label htmlFor="phoneNumber">Phone Number</label>    
                            <input type="text" name="phoneNumber"    
                                onChange={this.handleChange}    
                                value={this.state.phoneNumber}    
                                placeholder="Your phone number.."    
                                className={phoneNumberErr ? ' showError' : ''} />    
                            {phoneNumberErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{phoneNumberErr}</div>    
                            }    
                        </div>  

                        <div>    
                            <label htmlFor="changePassword">Change Password</label>    
                            <input type="password" name="changePassword"    
                                value={this.state.changePassword}    
                                onChange={this.handleChange}    
                                placeholder="Change your Password here" ></input>                                   
                               
                               
                       </div>


                        

                        <div >
                        <label htmlFor="resume">Upload your resume</label>  
                        <input type="file" id="myFile" name="filename"></input>
                        <button type="submit">Upload</button> 
                        </div>

                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >    
        )    
    }    
}    
    
export default Profile;