import React, { Component } from 'react';
import MainPage from './Pages/MainPage';
import Login from './components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainPage />
        <Login />
      </div>
    );
  }
}

export default App;
