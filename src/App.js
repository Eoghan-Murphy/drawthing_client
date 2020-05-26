import React from 'react';
import './App.css';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import {compose} from 'redux';
import {withFirestoreRedux} from './Firebase'

import HomePage from './Pages/HomePage';
import SignInPage from './Pages/AccountManagement/SignInPage'
import RegistrationPage from './Pages/AccountManagement/RegistrationPage';
import ChangeProfilePicturePage from './Pages/AccountManagement/ChangeProfilePicturePage'

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
              <Navbar/>
              <SignInPage/>
            </Route>
            <Route exact path={ROUTES.SIGN_UP}>
              <Navbar/>
              <RegistrationPage/>
            </Route>
            <Route exact path={ROUTES.PROFILE_SETTINGS}>
              <Navbar/>
              <ChangeProfilePicturePage/>
            </Route>
            
          </Switch>
        </BrowserRouter>
  );
}

export default compose(
  baseAuthentication,
  withFirestoreRedux,
)(App);
