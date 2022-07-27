import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TeleCaller from './TeleCallerPages/TeleCaller';
import Payment from './TeleCallerPages/Payment'

class Routes extends React.Component{
  render(){
    return (
      <Switch>
        <Route path='/teleCaller' component={TeleCaller} />
        <Route path='/payment' component={Payment} />

      </Switch>
    );
  }

}
export default Routes;
