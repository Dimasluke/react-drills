import React, { Component } from 'react';

class Login extends Component {

    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.alertInfo = this.alertInfo.bind(this)
    }

    updateUsername (value) {
        this.setState({
            username: value
        })
    }

    updatePassword (value) {
        this.setState({
            password: value
        })
    }

    alertInfo () {
        alert("Username: " + this.state.username + " Password: " + this.state.password)
    }

    render () {
        return (
            <div>
                <input onChange={event => this.updateUsername(event.target.value)} value={this.state.username} />
                <input onChange={event => this.updatePassword(event.target.value)} value={this.state.password} />
                <button onClick={this.alertInfo}>Log In</button>
            </div>
        )
    }
}

export default Login

