import React, { Component } from 'react';

export default class FunctionTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowClickState: true,
            functionClickState: false,
        }
        
        this.functionClick = this.functionClick.bind(this);
    }

    functionClick() {
        const functionClickState = this.state.functionClickState? false : true;
        this.setState({
            functionClickState: functionClickState,
        })
    }

    arrowClick = () => {
        const arrowClickState = this.state.arrowClickState? false : true;
        this.setState({
            arrowClickState: arrowClickState,
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.arrowClick}>Arrow Click Function: {this.state.arrowClickState.toString()}</button>
                <button onClick={this.functionClick}>Function Click Function: {this.state.functionClickState.toString()}</button>
            </div>
        )
    }
}
