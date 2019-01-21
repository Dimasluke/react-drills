import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      text: '',
      words: ["one", "two", "three", "four", "four"]
    }
  }

  updateText (value) {
    this.setState({
      text: value
    })
  }

  render() {
    return (
      <div>
        <input onChange={e => this.updateText(e.target.value)} value={this.state.text} />
        <h1>{this.state.words.map(e => <h2>{e}</h2>).filter(e => e === this.state.text)}</h1>

        
      </div>
    );
  }
}

export default App;
