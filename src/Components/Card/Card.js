import React from 'react';


const Card = (props) => {
    
    return (
        <div>
            <div>
               
            </div>

            <div class="pa4">
                <img className='grow' src= {props.Image} width='280' height='246'
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://www.missingkids.org/etc/clientlibs/ncmec/poster/images/poster/en_US/noPhotoAvailable.jpg" }} />


                <div class="overflow-auto">
                    <table class="f6 w-100 mw8 center" cellspacing="0" className='tc bg-white dib br3 p3 ma2  bw2 shadow-5'>
                        
                        <tbody class="lh-copy">
                            <tr className=' b f4 '>
                                <td class="pv3 pr3 bb b--black-20 "><button className='pointer blue br-pill dim' value={props.ButtonValue} onClick={props.Edit}> Edit </button> </td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">First Name</td>
                                <td class="pv3 pr3 bb b--black-20">Last Name</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">Phone no</td>
                                <td class="pv3 pr3 bb b--black-20">Email</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">Address</td>
                                <td class="pv3 pr3 bb b--black-20">Post Code</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">Date of Birth</td>
                                <td class="pv3 pr3 bb b--black-20">Uniform</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">Staff Card</td>
                                <td class="pv3 pr3 bb b--black-20">Staff Card Issued date</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">Passport No</td>
                                <td class="pv3 pr3 bb b--black-20">Passport Expiry Date</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">DBS No</td>
                                <td class="pv3 pr3 bb b--black-20">DBS Expiry No</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">Training Date</td>
                                <td class="pv3 pr3 bb b--black-20 ">Training Expiry Date</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">NI Number</td>
                            </tr>
                            <tr>
                                <td class="pv3 pr3 bb b--black-20 "><button className='pointer blue br-pill dim' id={props.DelID} value={props.ButtonValue} onClick={props.Delete}> Delete </button> </td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">{props.FirstName}</td>
                                <td class="pv3 pr3 bb b--black-20">{props.LastName}</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">{props.PhoneNumber}</td>
                                <td class="pv3 pr3 bb b--black-20">{props.Email}</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">{props.Address}</td>
                                <td class="pv3 pr3 bb b--black-20">{props.PostCode}</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">{props.DateofBirth}</td>
                                <td class="pv3 pr3 bb b--black-20">{props.Uniform}</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">{props.StaffCard}</td>
                                <td class="pv3 pr3 bb b--black-20">{props.StaffCardIssueDDate}</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">{props.PassportNumber}</td>
                                <td class="pv3 pr3 bb b--black-20">{props.PassportExpiryDate}</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">{props.DBSNumber}</td>
                                <td class="pv3 pr3 bb b--black-20">{props.DBSExpiryDate}</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">{props.TrainingDate}</td>
                                <td class="pv3 pr3 bb b--black-20">{props.TrainingExpiryDate}</td>
                                <td class="pv3 pr3 bb b--black-20 bg-light-blue">{props.NINO}</td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Card;