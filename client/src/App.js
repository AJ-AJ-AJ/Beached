import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';


class App extends Component {
  render() {
    const HomePageWrapper = (props) => {
      return (
        <HomePage {...props} />
      )
    }

      return (
        <Router>
          <div>
            <Switch>
              <Route exact path='/' render={HomePageWrapper}/>
            </Switch>
          </div>
        </Router>
      );
  }
}

export default App;
