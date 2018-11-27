import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from './Pages/MainPage';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={'/'} component={MainPage}/>
          <Login />
        </Switch>
      </Router>
    );
  }
}

export default App;
