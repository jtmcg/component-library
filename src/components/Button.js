import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.buttonText,
        }
    }
    
    render() {
        return (
            <div className="button-container">
                <button className="button" onClick={this.props.onClick}>
                    <span>{this.state.text}</span>
                </button>
            </div>
        )
    }
}
