import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


import { Link, Route, Switch } from 'react-router-dom';




class RegisterEmployee extends React.Component {
    
    constructor({ view }) {
        super()
        this.state = {

            FirstName: null,
            LastName: null,
            DateofBirth: '0000-00-0000',
            Email: null,
            Image: null,
            Address: null,
            PostCode: null,
            PassportNumber: null,
            PassportExpiryDate: '0000-00-0000',
            TrainingDate: '0000-00-0000',
            TrainingExpiryDate: '0000-00-0000',
            NINO: null,
            DBSNumber: null,
            DBSExpiryDate: '0000-00-0000',
            PhoneNumber: null,
            Uniform: null,
            StaffCard: null,
            StaffCardIssueDate: '0000-00-0000',
        }




    }
    onTrainingDateChange = (event) => {
        this.setState({ TrainingDate: event.target.value })

    }
    onDateofBirthChange = (event) => {
        this.setState({ DateofBirth: event.target.value });
        console.log(event.target.value)

    }
    onTrainingExpiryDateChange = (event) => {
        this.setState({ TrainingExpiryDate: event.target.value })

    }
    onNINoChange = (event) => {
        this.setState({ NINO: event.target.value })

    }
    onDBSNumberChange = (event) => {
        this.setState({ DBSNumber: event.target.value })

    }
    onDBSExpiryDateChange = (event) => {
        this.setState({ DBSExpiryDate: event.target.value })

    }

    onPhoneNumberChange = (event) => {
        this.setState({ PhoneNumber: event.target.value })

    }
    onUniformChange = (event) => {
        this.setState({ Uniform: event.target.value })

    }
    onStaffCardChange = (event) => {
        this.setState({ StaffCard: event.target.value })

    }
    onStaffCardIssueDateChange = (event) => {
        this.setState({ StaffCardIssueDate: event.target.value })

    }
    onFirstNameChange = (event) => {

        this.setState({ FirstName: event.target.value })

    }
    onLastNameChange = (event) => {
        this.setState({ LastName: event.target.value })

    }
    onEmailChange = (event) => {
        this.setState({ Email: event.target.value })

    }
    onImageChange = (event) => {
        this.setState({ Image: event.target.files[0] });
        console.log(event.target.files[0])
    }
    onAddressChange = (event) => {
        this.setState({ Address: event.target.value })

    }
    onPostCodeChange = (event) => {
        this.setState({ PostCode: event.target.value })

    }
    onPassportNumberChange = (event) => {
        this.setState({ PassportNumber: event.target.value })

    }
    onPassportExpiryDate = (event) => {
        this.setState({ PassportExpiryDate: event.target.value })

    }


    onSubmitRegister = (e) => {
        e.preventDefault();
        if (this.state.Email === null) {
            alert(' Opps! An Error occured. Email must be filled!!')

        }
        else {
            const { FirstName, LastName, Email, Image, Address, PostCode, PassportNumber, PassportExpiryDate, StaffCard, StaffCardIssueDate, Uniform, PhoneNumber, DBSNumber, DBSExpiryDate, NINO,
                TrainingDate, TrainingExpiryDate, DateofBirth
            } = this.state;

            let Form = new FormData;
            Form.append('FirstName', FirstName);
            Form.append('LastName', LastName);
            Form.append('Email', Email);
            Form.append('Image', Image);
            Form.append('Address', Address);
            Form.append('PostCode', PostCode);
            Form.append('PassportNumber', PassportNumber);
            Form.append('PassportExpiryDate', PassportExpiryDate);
            Form.append('StaffCard', StaffCard);
            Form.append('StaffCardIssueDate', StaffCardIssueDate);
            Form.append('Uniform', Uniform);
            Form.append('PhoneNumber', PhoneNumber);
            Form.append('DBSNumber', DBSNumber);
            Form.append('DBSExpiryDate', DBSExpiryDate);
            Form.append('NINO', NINO);
            Form.append('TrainingDate', TrainingDate);
            Form.append('TrainingDateExpiryDate', TrainingExpiryDate);
            Form.append('DateofBirth', DateofBirth);

            confirmAlert({
                title: 'Confirm to register',
                message: 'Are you sure to register staff?.',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => fetch('http://localhost:3001/Register', {
                            method: 'post',

                            body: Form

                        })
                            .then(response => response.json())
                            .then(data => { alert(this.state.FirstName + ' has been registerd'); window.location.reload(true) })


                    },
                    {
                        label: 'No',
                        onClick: () => alert('OK! staff was not registered')
                    }
                ]
            });



            

        }
    }



    render() {

        return (

            <div className='center bg-white mt20000 tracked '>
               
                <main class="pa4 black-80 ">
                    <form class="measure ">
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0 ">

                            <legend class="f2 fw6 ph0 mh0">Registration Form</legend>
                            <input style={{ color: 'white', backgroundColor: 'red', cursor: 'pointer' }} type='reset' value='Reset' />
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">FirstName</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="text"
                                    name="FirstName" id="FirstName" onChange={this.onFirstNameChange} />
                            </div>
                            <div class="mv3">
                                <label class="db fw6 lh-copy f6" for="LastName">Last Name</label>
                                <input class="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="text" name="LastName" id="LastName" onChange={this.onLastNameChange} />

                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Email</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="email" name="Email" id="Email" onChange={this.onEmailChange} required />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Phone Number</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="number" name="PhoneNumer" id="PhoneNumber" onChange={this.onPhoneNumberChange} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Address</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="text" name="Address" id="Address" onChange={this.onAddressChange} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Post Code</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="text" name="PostCode" id="PostCode" onChange={this.onPostCodeChange} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Date of Birth</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="date" name="DateofBirth" id="DateofBirth" onChange={this.onDateofBirthChange} />
                            </div>

                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Uniform</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="text" placeholder="Yes or No" onChange={this.onUniformChange} />
                                
                            </div>
                            <div class="mt3"> 
                                <label class="db fw6 lh-copy f6" for="">Staff ID Card</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="text" placeholder="Yes or No"onChange={this.onStaffCardChange}/>
                                
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Staff Card Issued Date</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="date"
                                    name="StaffCardIssueDate" id="StaffCardIssueDate" onChange={this.onStaffCardIssueDateChange} />
                            </div>

                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Passport / ID Number</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="text"
                                    name="PassportNumber" id="PassportNumber" onChange={this.onPassportNumberChange} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for=""> Passport / ID Expiry Date</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="date"
                                    name="PassportExpiryDate" id="PassportExpiryDate" onChange={this.onPassportExpiryDate} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">NI Number</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="text" name="NINO" id="NINO" onChange={this.onNINoChange} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">DBS Number</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="text" name="DBSNumber" id="DBSNumber" onChange={this.onDBSNumberChange} />
                            </div>

                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for=""> DBS Expiry Date</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="date" name="DBSExpiryDate" id="DBSExpiryDate" onChange={this.onDBSExpiryDateChange} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for=""> Training Date</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="date" name="TrainingDate" id="TrainingDate" onChange={this.onTrainingDateChange} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for=""> Training Expiry Date</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="date"
                                    name="TrainingExpiryDate" id="TrainingExpiryDate" onChange={this.onTrainingExpiryDateChange} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Profile Picture</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="file" name="Image" id="Image" onChange={this.onImageChange} />
                            </div>



                            <div class=" pa4">
                                <Link to={"/"}>
                                    <input class="pa2 f4 bg-green dim pointer" type='submit' onClick={this.onSubmitRegister} value='Register' />

                                </Link>
                            </div>



                        </fieldset>


                    </form>
                </main>



            </div>);

    }
}
export default RegisterEmployee;