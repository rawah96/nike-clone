import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import NewReleases from './components/NewReleases/NewReleases'
import Men from './components/Men/Men'
import Women from './components/Women/Women'
import Kids from './components/Kids/Kids'
import Help from './components/Help/Help'
import Join from './components/Joinus/Join'
import Login from './components/Signin/Signin'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/newReleases">
            <NewReleases />
          </Route>
          <Route path="/men">
            <Men />
          </Route>
          <Route path="/women">
            <Women />
          </Route>
          <Route path="/kids">
            <Kids />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/join">
            <Join />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
