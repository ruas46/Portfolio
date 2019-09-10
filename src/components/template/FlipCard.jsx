import React from 'react'
import './FlipCard.css'
import {Animated} from "react-animated-css";

export default props =>
    <Animated animationIn="flipInY" animationInDelay={props.delay} isVisible={props.isVisible} >
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={props.img} alt={props.imgAlt} height="100" />
                </div>
                <div class="flip-card-back">
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    </Animated>