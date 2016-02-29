import React, { Component } from 'react';

class Input extends Component {
    render() {

        let wrapperClass = 'form-group';
        let controlClass = 'form-control';
        if (this.props.error && this.props.error.length > 0) {
            wrapperClass += " " + 'has-danger';
            controlClass += " " + 'form-control-danger';
        }

        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name} className="form-control-label">{this.props.label}</label>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    className={controlClass}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.onChange} />
                <div className="text-help">{this.props.error}</div>
            </div>
        );
    }
}

export default Input;