import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});



class TrainingExpiration extends React.Component {
    
    constructor() {
        
        super()
        
        this.state = {
            Status: [],



        }




    }

    componentDidMount() {

        fetch('http://localhost:3001/checktraining')
            .then(response => response.json())
            .then(data => {

                this.setState({ Status: data || [] });

            });

        
    }

    componentDidUpdate() {

        if (this.state.Status.length == 0) {

            return alert('Good news!!!, all your staff documents are up to date');
        }
        else {
            return alert('Oops!, some of your staff documents are within one month of expiration');
        }
    }

    

    render() {
        if (!this.state.Status == '') {
            
            return (
                <TableContainer component={Paper}>
                    <Table className='' aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>First Name </StyledTableCell>
                                <StyledTableCell align="right">Last Name &nbsp;</StyledTableCell>
                                <StyledTableCell align="right">Email Address &nbsp;</StyledTableCell>
                                <StyledTableCell align="right">Phone Number&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">Training Expiry Date&nbsp;</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            
                            {this.state.Status.map((user) => (
                                <StyledTableRow key={user.id}>
                                    <StyledTableCell component="th" scope="row">
                                        {user.firstname}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{user.lastname}</StyledTableCell>
                                    <StyledTableCell align="right">{user.email}</StyledTableCell>
                                    <StyledTableCell align="right">{user.phonenumber}</StyledTableCell>
                                    <StyledTableCell align="right">{user.trainingexpirydate}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            );
            
        }
        else {
            { alert('Good news, all your staff documents are up to date') }
            return (
                
                <TableContainer component={Paper}>
                    <Table className='' aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>First Name </StyledTableCell>
                                <StyledTableCell align="right">Last Name &nbsp;</StyledTableCell>
                                <StyledTableCell align="right">Email Address &nbsp;</StyledTableCell>
                                <StyledTableCell align="right">Phone Number&nbsp;</StyledTableCell>
                                <StyledTableCell align="right">Training Expiry Date&nbsp;</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                                                            
                        </TableBody>
                    </Table>
                </TableContainer>
            );

        }
        
    }





}


export default TrainingExpiration;