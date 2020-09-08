import React from 'react';import Particles from 'react-particles-js';import './App.css';import { Link, Route, Switch } from 'react-router-dom';import Cardlist from './Components/Card/Cardlist.js';import RegisterEmployee from './Components/RegisterEmployee/RegisterEmployee';import Searchbox from './Components/Searchbox/searchbox.js';//import { Employees } from './Components/Employeesdb/Employees';import NavHome from './Components/Navigation/NavHome';import NavRegister from './Components/Navigation/NavRegister';import NavCheck from './Components/Navigation/NavCheck';import Appbar from './Components/Navigation/Appbar';import CheckExpiration from './Components/CheckExpiration/CheckExpiration';import PassportExpiration from './Components/CheckExpiration/PassportExpiration';import TrainingExpiration from './Components/CheckExpiration/TrainingExpiration';import DbsExpiration from './Components/CheckExpiration/DBSExpiration';import Logo from './Components/Navigation/logo.js';const ParticlesOption = {	particles: {		number: {			value: 100,			density: {				enable: true,				value_area: 800			}		}	}}class App extends React.Component {	constructor() {		super();		this.state = {			MainSearch: '',								}	}	componentDidMount() {			}		onSearchChange = (event) => {		if (event.key === 'Enter') {			this.setState({ MainSearch: event.target.value })		}	}		render() {				return (			<div >				<Particles className='particles'					params={ParticlesOption}				/>				<header>					<Appbar />				</header>				<div className='pa4'>					<Route exact={true} path="/"> 						<input							className='pa3 input-reset ba bg-light-blue w-100 measure center  '							type='text'							placeholder='Search Employee'							onKeyDown={this.onSearchChange}						/>
					</Route>			</div>							<Route path="/Register" component={RegisterEmployee} />				<Route path="/NavCheck" component={CheckExpiration} />				<Route path="/PassportExpiration" component={PassportExpiration} />				<Route path="/TrainingExpiration" component={TrainingExpiration} />				<Route path="/DbsExpiration" component={DbsExpiration} />								<Route exact={true} path="/" component={() => <Cardlist SearchBox={this.state.MainSearch} />} />												<footer className="pv4 ph3 ph5-m ph6-l mid-gray ">					<div className='container'>					<small class="f6 db tc">� 2020 <b class="ttu">Bunoh Health Care Solutions Ltd</b>., All Rights Reserved</small>						<div class="tc mt3">							<p1> Developed by <b>Foster Ogwudu</b> from LUNOSTACK. Contact no - 07495956089 </p1>						</div>					</div>				</footer>			</div>		);	}}export default App;