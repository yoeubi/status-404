import React, { Component } from 'react';
import MainView from './components/Main/MainView';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainView/>
        <Login />
      </div>
    );
  }
}

export default App;
