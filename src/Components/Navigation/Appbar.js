import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './logo.js';
import NavHome from './NavHome';
import NavRegister from './NavRegister';
import NavCheck from './NavCheck';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Appbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Logo />
                    </IconButton>
                    <Typography variant="h3" className={classes.title}>
                        Bunoh Healthcare Solutions Employee Database
          </Typography>
                    <Link to={"/"}>   <NavHome /> </Link>
                    <Link to={"/Register"}> <NavRegister /> </Link>
                    <Link to={"/NavCheck"}> <NavCheck /> </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Appbar;