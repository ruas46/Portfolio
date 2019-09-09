import React from 'react'
import './HeaderLinks.css'
import HeaderIcon from '../../assets/img/icon.png'

export default () =>
    <div className="headerLinks">
        <a href="/" ><img src={HeaderIcon} alt="Icon" /></a>
        <a href="#degree" >About me</a>
        <a href="#experience" >Experience</a>
        <a href="#contact" >Contact</a>
    </div>