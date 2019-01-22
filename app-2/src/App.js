import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Image from './Image';
import Todo from './Todo';

class App extends Component {

 constructor (props) {
   super(props);
   this.state = {
     todo: '',
     tasks: []
   }
   this.addTodo = this.addTodo.bind(this)
 }

 addTodo (){
   this.setState({ tasks: [...this.state.tasks, this.state.todo]})
  //  let taskCopy = this.state.tasks.concat(this.state.todo)
  //  this.setState({
  //    tasks: taskCopy
  //  })
 }

 inputValue (value){
   this.setState({
     todo: value
   })
 }

  render() {
    return (
      <div className="App">
        {/* <Login />
        <Image imageUrl="https://images.unsplash.com/photo-1494697536454-6f39e2cc972d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" /> */}
        <h1>My to-do list:</h1>
        <input onChange={event => this.inputValue(event.target.value)}/>
        <button onClick={this.addTodo}> Add </button>
        <Todo todos={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
