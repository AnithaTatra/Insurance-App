import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TaskAllocation from './TeamLeadPages/TaskAllocation';
import ViewTaskAllocation from './TeamLeadPages/ViewTaskAllocation';

class Routes extends React.Component{
  render(){
    return (
      <Switch>
        <Route path='/taskAllocation' component={TaskAllocation} />
        <Route path='/viewTaskAllocation' component={ViewTaskAllocation} />
      </Switch>
    );
  }

}
export default Routes;
