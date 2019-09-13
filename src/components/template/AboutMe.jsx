import React from "react";
import './AboutMe.css'
import Langueges from './Languages'
import Degree from './Degree'

export default () => 
        <div id="about-me">
            <div className="title">About Me</div>
            <div className="text">Hi! I am Guilherme Ruas, a web developer focused on crafting great web experiences. Coding have been my passion since the days I started working with computers, but I found myself as development since 2015. <br/>In 2017 I graduated in Computer Science in ULBRA - Brazil, complementing my knowledge, adding my years of experience in IT field, totals eight years, half of this time as Developer in companies and freelancer.</div>
            <Degree />
            <Langueges />
        </div>