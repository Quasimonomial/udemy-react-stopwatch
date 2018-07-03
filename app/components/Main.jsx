import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Countdown from 'Countdown'
import Nav from 'Nav'
import Timer from 'Timer'

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="grid-container">
        <div className="grid-x">
          <div className="cell large-4 medium-3"></div>
          <div className="cell large-4 medium-6">
            <Switch>
              <Route path="/timer" component={Timer} exact/>
              <Route path="/countdown" component={Countdown} exact/>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
