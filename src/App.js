import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import {
  Welcome,
  Test1,
  Test2,
  Test3,
  Test4,
  TestOTP,
  TestLeaflet,
} from './Pages';
import Geojson from "./Pages/Geojson";

class App extends Component {
  render(){
    return(
      <div>
        <Switch>
          <Route path='/' component={Welcome} exact />
          <Route path='/test1' component={Test1} />
          <Route path='/test2' component={Test2} />
          <Route path='/test3' component={Test3} />
          <Route path='/test4' component={Test4} />
          <Route path='/test-otp' component={TestOTP} />
          <Route path='/test-leaflet' component={TestLeaflet} />
          <Route path='/geojson' component={Geojson} />
        </Switch>
      </div>
    );
  };
};

export default App;
