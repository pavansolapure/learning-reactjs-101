import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

function Welcome(props) {
  return <h1>{props.message}</h1>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < Welcome message="Welcome reader" />
          < Welcome message="Hello from the other side" />
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
