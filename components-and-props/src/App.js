import React, { Component } from 'react';
import './App.css';

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
        </header>
      </div>
    );
  }
}

export default App;
 