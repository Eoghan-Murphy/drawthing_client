import React from 'react';
import './App.css';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import HomePage from './HomePage';
import SiteNavigation from './SiteNavigation';
import LogIn from './LogIn';
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <SiteNavigation/>
          <HomePage/>
        </Route>
        <Route exact path="/login/">
          <SiteNavigation hideLinks={true}/>
          <LogIn/>
        </Route>
        <Route exact path="/register/">
          <SiteNavigation hideLinks={true}/>
          <Register/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
