import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FirstLogin from './pages/FirstLogin';

class Routess extends React.Component{
  render(){
    return (
    
      <Switch>
        <Route path='/firstlogin' exact component={FirstLogin} />
      </Switch>
     
      
    );
  }

}
export default Routess;
