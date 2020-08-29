import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css


import { Link, Route, Switch } from 'react-router-dom';




class EditEmployee extends React.Component {

    constructor(props ) {

        super(props )
        let IDInitial = this.props.FormID;
        this.state = {
            ID: IDInitial,
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
    componentDidMount() {

        fetch('http://localhost:3001/user/' + this.state.ID)
            .then(response => response.json())
            .then(data => {

                this.setState({
                    FirstName: data.firstname, LastName: data.lastname, Email: data.email, DateofBirth: data.dateofbirth, Address: data.address, PostCode: data.postcode,
                    PassportNumber: data.passportnumber, PassportExpiryDate: data.passportexpirydate, TrainingDate: data.trainingdate, TrainingExpiryDate: data.trainingexpirydate,
                    PhoneNumber: data.phonenumber, Uniform: data.uniform, StaffCard: data.staffcard, StaffCardIssueDate: data.staffcardissueddate, NINO: data.nino,
                    DBSNumber: data.dbsnumber, DBSExpiryDate: data.dbsexpirydate, 
                });

            });

        

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
        this.setState({ Uniform: event.target.value });
        

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
    
    

    onSubmitEdit = (e) => {
        e.preventDefault();
        if (this.state.Email === null) {
            alert(' Opps! An Error occured. Email must be filled!!')

        }
        else {
            const { ID, FirstName, LastName, Email, Image, Address, PostCode, PassportNumber, PassportExpiryDate, StaffCard, StaffCardIssueDate, Uniform, PhoneNumber, DBSNumber, DBSExpiryDate, NINO,
                TrainingDate, TrainingExpiryDate, DateofBirth
            } = this.state;

            let Form = new FormData;
            Form.append('ID', ID);
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
                title: 'Confirm to update',
                message: "Are you sure to update staff's detail?.",
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => fetch('http://localhost:3001/update' + this.state.ID, {
                            method: 'put',

                            body: Form

                        })
                            .then(response => response.json())
                            .then(data => { alert("Sucess!!!" + this.state.FirstName + "s details has been updated"); window.location.reload(true) })

                 


                    },
                    {
                        label: 'No',
                        onClick: () => alert('OK! staff was not updated')
                    }
                ]
            });



           
        }
    }
  
  

    render() {
            
        return (

            <div className='bg-light-blue'>

                <main class="pa4 black-80">
                    <form class="measure center" id={this.props.FormID} >
                        <fieldset class="ba b--transparent ph0 mh0">

                            <legend class="f2 fw6 ph0 mh0">Update {this.state.FirstName} {this.state.LastName}'s Profile</legend>
                            <button onClick={() => { window.location.reload(true) }} className='f4 link dim black pa0 pointer bg-red pa' > Cancel </button>
                            <div class="mt3">
                                
                                <label class="db fw6 lh-copy f6" for="">FirstName</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="text"
                                    name="FirstName" id="FirstName" onChange={this.onFirstNameChange} defaultValue={this.state.FirstName} />
                            </div>
                            <div class="mv3">
                                <label class="db fw6 lh-copy f6" for="LastName">Last Name</label>
                                <input class="b pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="text" name="LastName" id="LastName" onChange={this.onLastNameChange} defaultValue={this.state.LastName} />

                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Email</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="email" name="Email" id="Email" onChange={this.onEmailChange} required defaultValue={this.state.Email} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Phone Number</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="number" name="PhoneNumer" id="PhoneNumber" onChange={this.onPhoneNumberChange} defaultValue={this.state.PhoneNumber} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Address</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="text" name="Address" id="Address" onChange={this.onAddressChange} defaultValue={this.state.Address} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Post Code</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="text" name="PostCode" id="PostCode" onChange={this.onPostCodeChange} defaultValue={this.state.PostCode} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Date of Birth</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="date" name="DateofBirth" id="DateofBirth" onChange={this.onDateofBirthChange} value={this.state.DateofBirth} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Uniform</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="text" placeholder="Yes or No" onChange={this.onUniformChange} defaultValue={this.state.Uniform} />

                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Staff ID Card</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="text" placeholder="Yes or No" onChange={this.onStaffCardChange} defaultValue={this.state.StaffCard} />

                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Staff Card Issued Date</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="date"
                                    name="StaffCardIssueDate" id="StaffCardIssueDate" onChange={this.onStaffCardIssueDateChange} value={this.state.StaffCardIssueDate} />
                            </div>

                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Passport / ID Number</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="text"
                                    name="PassportNumber" id="PassportNumber" onChange={this.onPassportNumberChange} defaultValue={this.state.PassportNumber} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for=""> Passport / ID Expiry Date</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="date"
                                    name="PassportExpiryDate" id="PassportExpiryDate" onChange={this.onPassportExpiryDate} value={this.state.PassportExpiryDate} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">NI Number</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="text" name="NINO" id="NINO" onChange={this.onNINoChange} defaultValue={this.state.NINO} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">DBS Number</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="text" name="DBSNumber" id="DBSNumber" onChange={this.onDBSNumberChange} defaultValue={this.state.DBSNumber} />
                            </div>

                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for=""> DBS Expiry Date</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="date" name="DBSExpiryDate" id="DBSExpiryDate" onChange={this.onDBSExpiryDateChange} value={this.state.DBSExpiryDate} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for=""> Training Date</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="date" name="TrainingDate" id="TrainingDate" onChange={this.onTrainingDateChange} value={this.state.TrainingDate} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for=""> Training Expiry Date</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100" type="date"
                                    name="TrainingExpiryDate" id="TrainingExpiryDate" onChange={this.onTrainingExpiryDateChange} value={this.state.TrainingExpiryDate} />
                            </div>
                            <div class="mt3">
                                <label class="db fw6 lh-copy f6" for="">Profile Picture</label>
                                <input class="pa2 input-reset ba bg-transparent hover-bg-blue hover-white w-100"
                                    type="file" name="Image" id="Image" onChange={this.onImageChange}/>
                            </div>

                            
                            <div class=" pa4">
                                <button onClick={() => { window.location.reload(true) }} className='f4 link dim black pa0 pointer bg-red pa2 ma5' > Cancel </button>

                                <Link to={"/"}>
                                    <input class="pa2 f4 bg-green dim pointer" type='submit' onClick={this.onSubmitEdit} value='Update' />

                                </Link>
                            </div>



                        </fieldset>


                    </form>
                </main>



            </div>);

    }
}
export default EditEmployee;