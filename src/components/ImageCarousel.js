import React, { Component } from 'react';
import './ImageCarousel.css';
import * as componentLibrary from '../assets/component-library.png';
import * as dndSpellSearcher from '../assets/dnd-spell-searcher-screenshot.png';
import * as exodus from '../assets/exodus.png';
import * as icanhazdadjokes from '../assets/icanhazdadjokes-screenshot.png';
import * as interregnum from '../assets/interregnum.png';
import * as personalWebsite from '../assets/personal-website.png';
import * as rktc from '../assets/rktc.png';
import * as skaleProject from '../assets/skaleproject.png';
import { thisTypeAnnotation } from '@babel/types';

export default class ImageCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            imgs: [
                componentLibrary,
                dndSpellSearcher,
                exodus,
                icanhazdadjokes,
                interregnum,
                personalWebsite,
                rktc,
                skaleProject,
            ],
        };
    }

    previousSlide = () => {
        const lastIndex = this.state.imgs.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index,
        });
    }

    nextSlide = () => {
        const lastIndex = this.state.imgs.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;
        
        this.setState({
            currentImageIndex: index,
        });
    }

    render() {

        const { currentImageIndex, imgs } = this.state;
        var nextIdx = currentImageIndex + 1;
        var prevIdx = currentImageIndex - 1;

        if ( nextIdx >= imgs.length ) {
            nextIdx = 0
        } 

        if ( prevIdx <= -1 ) {
            prevIdx = imgs.length-1
        }

        const slides = imgs.map( (img, idx) => {
            
            var position = "hidden";
            var onClick = null;
            
            if ( idx === currentImageIndex) {
                position = "current"
                onClick = this.nextSlide
            } else if ( idx === nextIdx ) {
                position = "next";
                onClick = this.nextSlide
            } else if ( idx === prevIdx ) {
                position = "previous";
                onClick = this.previousSlide
            }

            return(
                <ImageSlide
                    img={ img }
                    position={ position }
                    onClick={ onClick }
                    idx={ idx }
                    key={ idx }
                />
            )

        })

        return (
            <div id="image-carousel-container">
                <div className="image-carousel">
                    <Arrow 
                        direction="left"
                        clickFunction={ this.previousSlide }
                        glyph="&#9664;"/>
                    <div className="image-carousel">
                        <img src={this.state.imgs[0]} className="carousel-size-placeholder" alt="placeholder" />
                        { slides }
                    </div>
                    <Arrow  
                        direction="right"
                        clickFunction={ this.nextSlide }
                        glyph="&#9654;"/>
                </div>
            </div>
        )
    }
}

function Arrow(props) {
    return(
        <div className={ `slide-arrow ${ props.direction }` } onClick={props.clickFunction}>
            { props.glyph }
        </div>
    )
} 

// Receives and image url (string) and creates a div containing said image url
function ImageSlide(props) {
    return(
        <img src={props.img} className={"image-carousel-slide-"+props.position+" image-carousel-slide"} id={props.idx} onClick={props.onClick} alt={props.idx}/>
    );
}