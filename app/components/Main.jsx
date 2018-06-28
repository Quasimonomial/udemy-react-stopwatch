import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Countdown from 'Countdown'
import Nav from 'Nav'
import Timer from 'Timer'

var Main = (props) => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/timer" component={Timer} exact/>
        <Route path="/countdown" component={Countdown} exact/>
      </Switch>
    </div>
  );
}

export default Main;
