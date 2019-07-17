import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import LoginView from './components/Login/Login_View';
import AddView from './components/CreateList/Add_View';
import RegisterView from './components/CreateAccount/Create_View';
import PackagesView from './components/ManagePackages/Packages_View';
import AccountView from './components/Account/account_View';
import SignIn from './components/Account/register';
import Main from './components/ManagePackages/ShowPackages.js';

const Root = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/snd" component={Main} />
			<Route exact path="/package" component={PackagesView} />
			<Route exact path="/Register" component={RegisterView} />
			<Route exact path="/create_todo/:userId" component={AddView} />
			<Route exact path="/signin" component={SignIn} />
		</Switch>
	</BrowserRouter>
);
export default Root;
