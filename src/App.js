import React, { Component } from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom'
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
        </div>
        <Switch>
          <Route render={() => <p>To get started, click one of the links above </p>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
