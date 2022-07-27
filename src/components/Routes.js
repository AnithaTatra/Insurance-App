import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';

import Register from './pages/Register';
import ForgotPassword from './pages/Forgot';
import Addrole from './pages/AddRole';
import Viewrole from './pages/ViewRole';
import RolesView from './pages/RolesView';
import AddLocation from './pages/AddLocation';
import ViewLocation from './pages/ViewLocation';
import LocationView from './pages/LocationView';
import AddBusiness from './pages/AddLob';
import ViewLob from './pages/ViewLob';
import LobView from './pages/LobView';
import AddLanguage from './pages/AddLanguage';
import ViewLanguage from './pages/ViewLanguage';
import LanguageView from './pages/LanguageView';
import UserManager from './pages/UserManager';
import UserManagerView from './pages/UserManagerView';
import Dashboard from './pages/Dashboard';


class Routes extends React.Component{
  render(){
    return (
      <Switch>

        <Route path='/dashboard' component={Dashboard} />
        {/* <Route path='/' exact component={DashboardPage} /> */}
        
        <Route path='/register' component={Register} />
        <Route path='/forgot' component={ForgotPassword} />
        <Route path='/addrole' component={Addrole} />
        <Route path='/viewRole' component={Viewrole} />
        <Route path='/roleview' component={RolesView} />
        <Route path='/addLocation' component={AddLocation} />
        <Route path='/viewLocation' component={ViewLocation} />
        <Route path='/locationView' component={LocationView} />
        <Route path='/addLob' component={AddBusiness} />
        <Route path='/viewLob' component={ViewLob} />
        <Route path='/LobView' component={LobView} />
        <Route path='/addLanguage' component={AddLanguage} />
        <Route path='/viewLanguage' component={ViewLanguage} />
        <Route path='/LanguageView' component={LanguageView} />
        <Route path='/userManager' component={UserManager} />
        <Route path='/userManagerView' component={UserManagerView} />


      </Switch>
     
      
    );
  }

}
export default Routes;
