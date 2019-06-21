import React from 'react'
import './ContactIcon.css'

export default props =>
    <a className="contactIcon" href={props.href}>
        <i className={`fa fa-${props.icon}`}></i>
    </a>