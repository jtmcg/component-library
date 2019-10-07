import React, { Component } from 'react';
//import axios from 'axios';
import './ImageCarousel.css';

export default class ImageCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            imgURLs: new Array(3),
        };

        this.previousSlide = this.previousSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }
    

    //Will require some refactoring to implement into other code based off image location
    componentDidMount() {
        const baseURL = "https://picsum.photos/id/";
        const photos = [baseURL+"1018/1600/900", baseURL+"1022/1600/900",baseURL+"1043/1600/900"]
        this.setState({
            imgURLs: photos
        });
    }

    previousSlide() {
        const lastIndex = this.state.imgURLs.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index,
        });
    }

    nextSlide() {
        const lastIndex = this.state.imgURLs.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;
        
        this.setState({
            currentImageIndex: index,
        });
    }

    render() {
        return (
            <div id="image-carousel-container">
                <div className="image-carousel">
                    <Arrow 
                        direction="left"
                        clickFunction={ this.previousSlide }
                        glyph="&#9664;"/>
                    
                    <ImageSlide
                        url = { this.state.imgURLs[this.state.currentImageIndex] }
                        clickFunction={ this.nextSlide }/>

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
        <div className={ `slide-arrow ${props.direction}` } onClick={props.clickFunction}>
            { props.glyph }
        </div>
    )
} 

// Receives and image url (string) and creates a div containing said image url
function ImageSlide(props) {
    return(
        <img src={props.url} className="image-carousel-slide" onClick={props.clickFunction} alt={props.url}/>
    );
}