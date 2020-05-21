import React from 'react';
import './App.css';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';

import HomePage from './Pages/HomePage';
import SignInPage from './Pages/AccountManagement/SignInPage'
import RegistrationPage from './Pages/AccountManagement/RegistrationPage';

import * as ROUTES from './routes';

import {baseAuthentication} from './Session'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Navbar/>
          <HomePage/>
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          <Navbar hideRegLinks={true}/>
          <SignInPage/>
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <Navbar hideRegLinks={true}/>
          <RegistrationPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default baseAuthentication(App);
