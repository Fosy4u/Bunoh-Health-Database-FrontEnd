import React from 'react';
import Card from './Card.js';
import EditEmployee from '../EditEmployee/EditEmployee';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Loader from '../Loader/Loader.js';
import { render } from 'react-dom';







class Cardlist extends React.Component {
    
    constructor(props) {
        
        super(props)
        let Search = this.props.SearchBox;
        this.state = {
            staff: [],
            status: 'ShowAll',
            EditKey: '',
            DeleteKey: '',
            SearchBox: Search,
            Loading: "true",
            image: ''
            
            
            
                
            
            
        }
            
         
        

    }
                            
    componentDidMount() {
        
        fetch('http://localhost:3001')
            .then(response => response.json())
            .then(data => {

                this.setState({ staff: data || [] });
                 
    });

        this.setState({ Loading: "false" });
        console.log(this.state.Loading)
    }
    


    OnStatusEdit = (event) => {

        this.setState({ status: 'Edit' });
        this.setState({ EditKey: event.target.value });
      

        
        
    }
    
    OnStatusShowAll = () => {
        this.setState({ status: 'ShowAll' })
    }

    onDeleteStaff = (event) => {
        this.setState({ DeleteKey: event.target.value });
        this.setState({ image: event.target.id })
        console.log(this.state.image);
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to delete staff?.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => fetch('http://localhost:3001/del' + this.state.DeleteKey, { method: 'delete', body: this.state.image })
                        .then(response => response.json())
                        .then(response => { alert('Staff has been deleted successfully'); window.location.reload(true) })
                    

                },
                {
                    label: 'No',
                    onClick: () => alert('OK! staff was not deleted')
                }
            ]
        });

       
    }
    

    render() {
        
        if (this.state.status === 'ShowAll') {
            if (this.state.Loading === "false") {
                return (


                    this.state.staff.filter(person => ((person.firstname.concat(' ', person.lastname)).trim()).toLowerCase().includes((this.state.SearchBox.trim()).toLowerCase())).map((user) => (

                        <div key={user.id} className='tc' >


                            <Card FirstName={user.firstname} LastName={user.lastname} DateofBirth={user.dateofbirth} Email={user.email} Image={user.image}
                                PassportNumber={user.passportnumber} PassportExpiryDate={user.passportexpirydate} DBSNumber={user.dbsnumber} DBSExpiryDate={user.dbsexpirydate}
                                TrainingDate={user.trainingdate} TrainingExpiryDate={user.trainingexpirydate}
                                NINO={user.nino} Address={user.address} PostCode={user.postcode}
                                Uniform={user.uniform} StaffCard={user.staffcard} StaffCardIssueDDate={user.staffcardissueddate} PhoneNumber={user.phonenumber}
                                Edit={this.OnStatusEdit} ButtonValue={user.id} DelID={user.image} Delete={this.onDeleteStaff} />



                        </div>

                    ))

                )
            }
            else {
                return(
                    <div> <Loader /> </div>
                    )
            }

        }
        else {
            return (


                <div>
                    <EditEmployee FormID={this.state.EditKey} />
                   
                </div>
                )
        
        }
    }
            
    

    

}

    






export default Cardlist;