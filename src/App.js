import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from './Pages/MainPage';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/'} component={MainPage} />
          {/* 라우터는 여기다가 일단 작성하시오 */ }
          <Route path={'/login'} component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
