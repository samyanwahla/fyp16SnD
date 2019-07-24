import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/other/home';
import PackagesView from './components/superAdmin/packages/packages_View'
import ShowPackages from './components/superAdmin/packages/showPackage'
import CreatePackage from './components/superAdmin/packages/createPackage'
import CheckOut from './components/distributor/payment/checkOut.js';
import SignInView from './components/other/account/signIn/signIn_View'
import paymentView from './components/distributor/payment/payment_View'
import Dashboard from './components/superAdmin/dashboard/dashboard';
import DashboardDis from './components/distributor/dashboard/dashboard';
import AllUsers from './components/superAdmin/dashboard/showUsers';
import ShowUsers  from './components/distributor/users/showUsers';
import UsersView from './components/distributor/users/usersView';
import Contact from './components/other/contact';
import SimpleAppBar from './components/other/layouts/appBar.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from './components/other/layouts/footer.js';
import CreateUser from './components/distributor/users/createUsers';
import CreateRole from './components/distributor/Roles/createRole'
import ShowRole from './components/distributor/Roles/showRoles'
import RolesView from './components/distributor/Roles/rolesView'
import NestedList from './components/distributor/dashboard/DropDownMenu';
import Features from './components/other/features.js';
const Root = () => (
	<BrowserRouter>
		<Switch>
			
			<Route exact path="/" component={Home} />
			<Route exact path="/contact"
				render={() => {
					return (
						<div>
							<CssBaseline />
							<SimpleAppBar />
							<Contact />
							<Footer />
						</div>
					);
				}}
			/>
				<Route
				exact
				path="/features"
				render={() => {
					return (
						<div><CssBaseline />
							<SimpleAppBar />
							<Features />
							<Footer />
						</div>
					);
				}}
			/>
			<Route
				exact
				path="/pricing"
				render={() => {
					return (
						<div>
							<SimpleAppBar />
							<ShowPackages />
							<Footer />
						</div>
					);
				}}
			/>
			{/***************************** admin ******************************/}
			<Route exact path="/admin/sigin" component={SignInView} />
		    <Route exact path="/admin/snd/dashboard" component={Dashboard} />
			<Route exact path="/admin/snd/packages" component={PackagesView} />
			<Route exact path="/admin/snd/packages" component={PackagesView} />
			<Route exact path="/admin/snd/Users" component={AllUsers} />
 
		{/***************************** distributor ******************************/}
		<Route exact path="/distributor/snd/New" component={NestedList} />
			<Route exact path="/signupandpayment" component={paymentView} />
			<Route exact path="/distributor/snd/dashboard" component={DashboardDis} />
			<Route exact path="/distributor/snd/users/User" component={UsersView} />
			<Route exact path="/distributor/snd/users/showUser" component={UsersView} />
			<Route exact path="/distributor/snd/users/createUser" component={UsersView} />
			<Route exact path="/distributor/snd/roles/createRole" component={RolesView} />
			<Route exact path="/distributor/snd/roles/showRole" component={RolesView} />
		</Switch>
	</BrowserRouter>
);
export default Root;
