import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login   from './components/Login/Login';
import Devices from './components/Devices/Devices';

export default function App() {
  return (
    <Router>
      <div className='main-app'>
        <Switch>
          <Route path="/login"><Login/></Route>
          <Route path="/devices"><Devices/></Route>
        </Switch>
      </div>
    </Router>
  )
}

