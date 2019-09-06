import React from 'react'
import {Animated} from "react-animated-css";
import TrackVisibility from 'react-on-screen';
import './Responsivety.css'
import DesktopImg from '../../assets/img/desktop-img.png'
import TabletImg from '../../assets/img/tablet-img.png'
import CellphoneImg from '../../assets/img/cellphone-img.png'

const ComponentToTrack = ({ isVisible }) => {
    return <div className="responsivety-imgs">
        <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={isVisible}>
            <img src={TabletImg} alt="Tablet" />
        </Animated>
        <Animated animationIn="pulse" animationOut="fadeOut" isVisible={isVisible}>
            <img src={DesktopImg} alt="Desktop" />
        </Animated>
        <Animated animationIn="bounceInRight" animationOut="fadeOut" isVisible={isVisible}>
            <img src={CellphoneImg} alt="Cellphone" />
        </Animated>
    </div>;
}

const Responsivety = () => {
    return (
        <div className="responsivety" >
            <TrackVisibility partialVisibility>
                <ComponentToTrack />
            </TrackVisibility>
            <div className="responsivety-text">
                <p>{'/* Experience with responsive development */'}</p>
            </div>
        </div>
    );
}
export default Responsivety;