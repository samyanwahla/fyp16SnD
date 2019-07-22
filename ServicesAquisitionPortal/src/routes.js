import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/other/home';
//import PackagesView from './components/superAdmin/packages/packages_View'
import ShowPackages from './components/superAdmin/packages/showPackage'
import CreatePackage from './components/superAdmin/packages/createPackage'
import CheckOut from './components/distributor/payment/checkOut.js';
import SignInView from './components/other/account/signIn/signIn_View'
import paymentView from './components/distributor/payment/payment_View'
import Dashboard from './components/superAdmin/dashboard/dashboard';
import DashboardDis from './components/distributor/dashboard/dashboard';
import ShowUsers from './components/superAdmin/dashboard/showUsers';
import UsersView from './components/distributor/users/usersView';
import CreateUser from './components/distributor/users/createUsers';
const Root = () => (
	<BrowserRouter>
		<Switch>
			
			<Route exact path="/" component={Home} />
			
			{/***************************** admin ******************************/}
			<Route exact path="/admin/sigin" component={SignInView} />
		    <Route exact path="/admin/snd/dashboard" component={Dashboard} />
			<Route exact path="/admin/snd/packages/showPackage" component={ShowPackages} />
			<Route exact path="/admin/snd/packages/createPackage" component={CreatePackage} />
			<Route exact path="/admin/snd/Users" component={ShowUsers} />
 
		{/***************************** distributor ******************************/}
			
			<Route exact path="/signupandpayment" component={paymentView} />
			<Route exact path="/distributor/snd/dashboard" component={DashboardDis} />
			<Route exact path="/distributor/snd/users/showUser" component={ShowUsers} />
			<Route exact path="/distributor/snd/users/createUser" component={CreateUser} />
		</Switch>
	</BrowserRouter>
);
export default Root;
