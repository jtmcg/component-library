import React, { Component } from 'react';
import './LoadingAnimatePeriods.css';

export default class LoadingAnimatePeriods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            periods: "",
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.updatePeriods(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    updatePeriods = () => {
        var periods = this.state.periods;
        if (this.state.periods !== ". . . ") {
            periods = periods.concat(". ")
        } else {
            periods = "";
        }

        this.setState({
            periods: periods
        });        
    }
    
    render() {
        const { periods } = this.state;
        return (
            <div className="loading-animate-periods-container">
                <div className="loading-animate-periods-text">
                    <h1>Loading<span>{periods}</span></h1>
                </div>
            </div>
        )
    
    }
}
