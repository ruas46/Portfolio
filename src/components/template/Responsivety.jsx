import React from 'react'
import {Animated} from "react-animated-css";
import TrackVisibility from 'react-on-screen';
import './Responsivety.css'
import DesktopImg from '../../assets/img/desktop-img.png'
import NotebookImg from '../../assets/img/notebook-img.png'
import CellphoneImg from '../../assets/img/cellphone-img.png'

const ComponentToTrack = ({ isVisible }) => {
    return <React.Fragment>
        <div className="responsivety-imgs">
            <Animated animationIn="zoomInDown" animationInDelay={200} isVisible={isVisible}>
                <img src={CellphoneImg} id="cellphone" width="100" alt="Cellphone" />
            </Animated>
            <Animated animationIn="zoomInDown" animationInDelay={100} isVisible={isVisible}>
                <img src={DesktopImg} id="desktop" width="280" alt="Desktop" />
            </Animated>
            <Animated animationIn="zoomInDown" animationInDelay={200} isVisible={isVisible}>
                <img src={NotebookImg} id="notebook" width="230" alt="Notebook" />
            </Animated>
        </div>
        <Animated animationIn="slideInUp" animationInDelay={700} isVisible={isVisible}>
            <div className="responsivety-text">
                <p>{'/* Experience with responsive development */'}</p>
            </div>
        </Animated>
    </React.Fragment>
}

const Responsivety = () => {
    return (
        <div className="responsivety" >
            <TrackVisibility partialVisibility once>
                <ComponentToTrack />
            </TrackVisibility>
        </div>
    );
}
export default Responsivety;