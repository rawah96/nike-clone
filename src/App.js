import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import NewReleases from './components/NewReleases/NewReleases'
import Men from './components/Men/Men'
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
            <h1>Women</h1>
          </Route>
          <Route path="/kids">
            kids
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
