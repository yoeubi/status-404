import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/"} component={MainPage} />
          {/* 라우터는 여기다가 일단 작성하시오 */}
        </Switch>
      </Router>
    );
  }
}

export default App;
