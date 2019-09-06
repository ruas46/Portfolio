import React from 'react'
import './HeaderButton.css'

export default ({ ...otherProps }) =>
        <button className="headerButton" {...otherProps}>
            <i className="fa fa-bars"></i>
        </button>