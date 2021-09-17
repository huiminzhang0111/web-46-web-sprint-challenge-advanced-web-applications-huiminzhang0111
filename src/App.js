import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import Logout from './components/Logout'
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <Link data-testid="logoutButton" to='/logout'>logout</Link>
          <Link data-testid="loginButton" to='/login'>Login</Link>
        </header>
        <Switch>
          <PrivateRoute path='/bubble-page' component={BubblePage} />
          <PrivateRoute path='/logout' component={Logout} />
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/logout'>
            <Logout />
          </Route>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.