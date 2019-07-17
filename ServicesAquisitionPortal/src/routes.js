
import React from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';
import LoginView from './components/Login/Login_View';
import AddView from './components/CreateList/Add_View'
import RegisterView from './components/CreateAccount/Create_View';
import PackagesView from './components/ManagePackages/Packages_View'
import AccountView from './components/Account/account_View';
//import LoginView from './components/Login/Login_View'
// import SignUp from './components/Account/signup'
import SignIn from './components/Account/register'
const Root = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/userSite' component={AccountView} />
      <Route exact path='/package' component={PackagesView} />
      {/* <Route exact path='/' component={LoginView} /> */}
      <Route exact path='/Register' component={RegisterView} />
      <Route exact path='/create_todo/:userId' component={AddView} />
      
      <Route exact path='/signin' component={SignIn} />
    </Switch>
  </BrowserRouter >
);
export default Root;
