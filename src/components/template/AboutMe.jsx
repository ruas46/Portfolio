import React from "react";
import './AboutMe.css'
import {Animated} from "react-animated-css";
import TrackVisibility from 'react-on-screen';
import Langueges from './Languages'
import Degree from './Degree'

const ComponentToTrack = ({ isVisible }) => {
    return <div id="about-me">
                <div className="about-me-title">About Me</div>
                <Animated animationIn="fadeInLeft" animationInDelay={500} isVisible={isVisible}>
                    <div className="about-me-text">Hi! I am Guilherme Ruas, a web developer focused on crafting great web experiences. Coding have been my passion since the days I started working with computers, but I found myself as development since 2015. <br/>In 2017 I graduated in Computer Science in ULBRA - Brazil, complementing my knowledge, adding my years of experience in IT field, totals eight years, half of this time as Developer in companies and freelancer.</div>
                </Animated>
                <Animated animationIn="fadeInRight" animationInDelay={800} isVisible={isVisible}>
                    <Degree />
                </Animated>
                <Animated animationIn="slideInUp" animationInDelay={1200} isVisible={isVisible}>
                    <Langueges />
                </Animated>
            </div>
}

export default () => 
        <TrackVisibility partialVisibility once>
            <ComponentToTrack />
        </TrackVisibility>
            