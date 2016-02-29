import React, { Component } from 'react';
import LoginForm from './forms/loginForm';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        // http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
        // this.setLoginState = this.setLoginState.bind(this);
        // this.setLoginState = (event) => this.setLoginState(event);
        // setLoginState = (event) => this.setLoginState(event); // ES7

        this.state = {
            user: { id: '', login: '', password: ''},
            errors: {}
        };
    }

// setLoginState: function(event) {}  // ES5
    setLoginState(event) {
        var field = event.target.name;
        var value = event.target.value;
        console.log(field);
        console.log(value);
        this.state.user[event.target.name] = event.target.value;
        return this.setState({ user: this.state.user })
    }

    render() {
        return (
            <LoginForm
            user={this.state.user}
            errors={this.state.errors}
//            onChange={this.setLoginState.bind(this)}
            onChange={(event) => this.setLoginState(event)} />
        );
    }
}

export default LoginPage;
