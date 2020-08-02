import React,{Component} from 'react';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Admin from './Components/Admin';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {withCookies} from 'react-cookie';

class App extends Component{
	render=()=>{
		return(
			<div>
			<Header/>
			<Router>
				<Route exact path='/'><Home cookies={this.props.cookies}/></Route>
				<Route path='/admin'><Admin cookies={this.props.cookies}/></Route>
			</Router>
			</div>
		)
	}
}
export default withCookies(App);