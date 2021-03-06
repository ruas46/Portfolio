import React from 'react'
import './HeaderMobile.css'
import {Animated} from "react-animated-css";

export default ({ isVisible, children }) =>
    <div>
        {children}
        { isVisible
          ? <Animated animationIn="fadeInRight" animationOut="fadeOutRight" isVisible={isVisible}>
                <div className="header-mobile">
                    <a href="#about-me" >About me</a>
                    <a href="#experience" >Experience</a>
                    <a href="#random-facts" >Random Facts</a>
                    <a href="#contact" >Contact</a>
                </div>
            </Animated>
          : null
        }
    </div>