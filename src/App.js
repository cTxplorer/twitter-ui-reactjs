import React, { Component } from 'react';
import Home from './Home';
import Search from './Search';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/search/' component={Search}/>
            </Switch>
        </BrowserRouter>
	);
  }
}

export default App;