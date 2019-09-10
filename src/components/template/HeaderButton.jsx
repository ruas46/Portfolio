import React from 'react'
import './HeaderButton.css'

export default ({ changeIcon, onClick }) =>
        <button className="headerButton" onClick={onClick} aria-label="Mobile Button">
            { changeIcon
              ? <i className="fa fa-angle-right"></i>
              : <i className="fa fa-bars"></i>
            }
            
        </button>