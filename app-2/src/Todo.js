import React, { Component } from 'react';

class Todo extends Component {
    render (){
        return(
            <div>
                {this.props.todos.map((e, i) => <h4 key={i} >{e}</h4>)}
            </div>
        )
    }
}

export default Todo