import React from 'react'
import './ContactIcon.css'

export default props =>
    <a className="contactIcon" href={props.href} aria-label={props.label}>
        <i className={`fa fa-${props.icon}`}></i>
    </a>