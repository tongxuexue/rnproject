/**
 * Created by gy on 2018/3/8.
 */

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './pages/Login';
import HomePage from './pages/HomePage';


const App = () => {
  return (
      <Router>
        <Scene key="root">
          <Scene key="login"
                 component={Login}
                 title="Login"
                 initial
          />
          <Scene
              key="homepage"
              component={HomePage}
              title="HomePage"
          />
        </Scene>
      </Router>
  )
}
export default App;