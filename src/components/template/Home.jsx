import React from 'react'
import './Home.css'
import {Animated} from "react-animated-css";
import TrackVisibility from 'react-on-screen';

const ComponentToTrack = ({ isVisible }) => {
    return <Animated animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={isVisible}>
                <div className="text">
                    <div className="name">Guilherme Ruas</div>
                    <div className="dev">Full Stack &<br/>Front End</div>
                </div>
            </Animated>
}

export default props =>
        <div className="home">
            <TrackVisibility partialVisibility>
                <ComponentToTrack />
            </TrackVisibility>
        </div>