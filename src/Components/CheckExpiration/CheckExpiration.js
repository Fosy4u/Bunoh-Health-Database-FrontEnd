import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper'
import { Link, Route, Switch } from 'react-router-dom';

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



class CheckExpiration extends React.Component {
    
    constructor() {
        
        super()
        
        this.state = {
            Expiry: '',



        }




    }

    

    render() {

        return (
            <div>
                <div className='center'>
                    <Link to={"/PassportExpiration"}> <button className='f3 link dim black pa3 ma5  pointer bg-light-blue br-pill' > Passport Expiry  </button> </Link>
                    <Link to={"/DbsExpiration"}><button className='f3 link dim black pa3 ma5 pointer bg-light-blue br-pill' > DBS Expiry </button></Link>
                    <Link to={"/TrainingExpiration"}><button className='f3 link dim black pa3 ma5 pointer bg-light-blue br-pill' > Training Expiry </button></Link>

                </div>





            </div>
            )




    }

    



}



export default CheckExpiration;