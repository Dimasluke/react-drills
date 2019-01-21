import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  updateUsername (val) {
    this.setState({
      username: val
    })
  }

  updatePassword (val) {
    this.setState({
      password: val
    })
  }


  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
