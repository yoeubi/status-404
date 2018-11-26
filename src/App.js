import React, { Component } from 'react';
import Main from './components/Main/Main';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
        <Login />
      </div>
    );
  }
}

export default App;
