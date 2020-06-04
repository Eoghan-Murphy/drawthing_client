import React from 'react';
import './App.css';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import {compose} from 'redux';
import {withFirestoreRedux} from './Firebase'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'

import HomePage from './Pages/HomePage';
import SignInPage from './Pages/AccountManagement/SignInPage'
import RegistrationPage from './Pages/AccountManagement/RegistrationPage';
import ChangeProfilePicturePage from './Pages/AccountManagement/ChangeProfilePicturePage'

import * as ROUTES from './routes';

import {baseAuthentication} from './Session'


function App() {
  return (
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path={ROUTES.HOME}>
              <HomePage/>
            </Route>
            <Route exact path={ROUTES.SIGN_IN}>
              <SignInPage/>
            </Route>
            <Route exact path={ROUTES.SIGN_UP}>
              <RegistrationPage/>
            </Route>
            <Route exact path={ROUTES.PROFILE_SETTINGS}>
              <ChangeProfilePicturePage/>
            </Route>
            
          </Switch>
        </BrowserRouter>
  );
}

export default compose(
  baseAuthentication,
  withFirestoreRedux
)(App);
