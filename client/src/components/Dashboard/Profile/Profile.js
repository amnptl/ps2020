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
                <h1 style={{ textAlign: "center" }} >Fill your information below </ h1>
                <div>
                    <form onSubmit={this.handleSubmit}>

                        <div>
                            <label htmlFor="date">Birth Date</label>
                            <input type="date" name="dob"
                                value={this.state.dob}
                                onChange={this.handleChange}
                                placeholder="DD-MM-YYYY"
                               />
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
                        <div >
                        <label htmlFor="resume">Upload your resume</label>
                        <input type="file" id="myFile" name="filename"></input>
                        <button type="submit">Upload</button>
                        </div>

                        <input type="submit" value="Update" />
                    </form>
                </div>
            </div >
        )
    }
}

export default Profile;
