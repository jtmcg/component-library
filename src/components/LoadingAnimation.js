import React from 'react';
import './LoadingAnimation.css';

export default function LoadingAnimation() {
    return (
        <div className="loading-container">
            <div className="loading-container-one">
                <div className="box-one small-square red"/>
                <div className="box-two small-square red"/>
                <div className="box-three small-square red"/>
                <div className="box-four small-square red"/>
            </div>
            <div className="loading-container-two">
                <div className="box-one small-square blue"/>
                <div className="box-two small-square blue"/>
                <div className="box-three small-square blue"/>
                <div className="box-four small-square blue"/>
            </div>
        </div>
    )
}
