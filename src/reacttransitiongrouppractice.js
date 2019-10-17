import { Transition, CSSTransition } from 'react-transition-group';
import React, { Component } from 'react';
import './reacttransitiongrouppractice.css';

const duration = 300; //in milliseconds

const defaultStyle = { 
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = { 
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
}

/* Transition state is toggled via the `in` prop. There are 4 main states a Transtion can be in:
1. entering - triggered once `in` changes to true
2. entered - triggers after the duration of the transition is complete on entering
3. exiting - triggered once `in` changes to false
4. exited - triggers after the duration of the transition is complete on exiting
*/

const Fade = ({ in: inProp }) => (
    <Transition in={inProp} timeout={duration}>
        {state => (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state],
            }}>
                I'm a fade Transition!
            </div>
        )}
    </Transition>
);

export default class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            inProp: false,
        }
    }

    toggleState = () => {
        const newState = !this.state.inProp;
        this.setState({
            inProp: newState
        });
    }

    render() {
        return(
            <div>
                <CSSTransition in={this.state.inProp} unmountOnExit timeout={200} classNames="test-node">
                    <div>
                        {"I'll recieve test-node-* classes"}
                    </div>
                </CSSTransition>
                <button type="button" onClick={this.toggleState}>
                    Click to Toggle
                </button>
            </div>
        )
    }
}