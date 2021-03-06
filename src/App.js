import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route, NavLink } from 'react-router-dom';
import Github from './Github'
import Instagram from './Instagram'
import Nasa from './Nasa'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-headings">
            <h3>Aint no party like an</h3>
            <h1>API Party</h1>
          </div>
          <ul className='nav-links'>
            <li>
              <NavLink to='/github'>GitHub API</NavLink>
            </li>
            <li>
              <NavLink to={'/nasa'}>Nasa API</NavLink>
            </li>
            <li>
              <NavLink to='/instagram'>Spotify API</NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/github" component={Github}/>
          <Route path='/instagram' component={Instagram}/>
          <Route path='/nasa' component={Nasa} />
          <Route render={() => <p>To get started, click one of the links above </p>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
