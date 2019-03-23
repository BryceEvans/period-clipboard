import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';

class Router extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="App">
        <Route exact path='/' component={ Home } />
        <Route path='/dashboard' component={ Dashboard } />
      </div>
    );
  }
}

export default Router;