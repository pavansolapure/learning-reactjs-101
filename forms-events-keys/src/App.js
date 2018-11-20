import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';
import Contact from './Contact';

function Welcome(props) {
  return <h1>{props.message}</h1>
}

class App extends Component {

  state = {
    value: 0
  }

  onClickHandler = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 0.05
      }
    })
  }

  onMouseDownHandler = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        return {
          value: prevState.value + 0.05
        }
      })
    }, 250);
  }

  onMouseUpHandler = () => {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          < Welcome message="Welcome reader" />
          < Welcome message="Hello from the other side" />
          <Clock />
          <Contact />
        </header>
      </div>
    );
  }
}

export default App;
