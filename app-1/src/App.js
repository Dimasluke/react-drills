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

  handleChange( filter ){
    this.setState({
      text: filter
    })
  }

  render() {
  let numbersToDisplay = this.state.words.filter((element, index) => {
    return element.includes(this.state.text)
  }).map((element, index) => {
    return <h2 key={index}>{element}</h2>
  })

    return (
      <div className="App">
        <input onChange={ (e) => this.handleChange( e.target.value ) } type="text" />  
        {numbersToDisplay}
      </div>
    );
  }
}

export default App;
