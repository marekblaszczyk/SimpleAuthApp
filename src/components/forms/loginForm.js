import React, { Component } from 'react';
import Input from './input';

class LoginForm extends Component {

    render() {
        return (
            <div className="row top-buffer">
                <div className="col-md-4 col-md-offset-4">
                    <form>
                        <Input
                            name="login"
                            label="login"
                            type="text"
                            placeholder="login"
                            value={this.props.user.login}
                            onChange={this.props.onChange}
                            error={this.props.errors.login} />

                        <Input
                            name="password"
                            label="password"
                            type="password"
                            placeholder="password"
                            value={this.props.user.password}
                            onChange={this.props.onChange}
                            error={this.props.errors.password} />

                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                <button type="submit" className="btn btn-primary">zaloguj się</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginForm;