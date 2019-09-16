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
                    <div className="about-me-text">Hi! I am Guilherme Ruas, a Full Stack Developer focused on crafting best solutions in live websites. Coding have been my passion since the days I started working with computers, but I found myself as a Developer since 2015. In 2017 I graduated in Computer Science in ULBRA - Brazil, complementing my knowledge and skills. I have 8 years of experience in IT, half of this time as a Developer in companies and as a Freelancer.</div>
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
            