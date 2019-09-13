import React from 'react'
import './Degree.css'
import Img from '../../assets/img/monitor.png'
import Cap from '../../assets/img/cap.png'


export default props =>
    <div id="degree">
        <div>
            <img id="degree-img-monitor" src={Img} alt="Img" height="150" />
            <img id="degree-img-cap" src={Cap} alt="Cap" />
        </div>
        <p>
            <span className="esp">const </span>
                <span className="var">formation </span>
                <span className="other">=</span>
                <span className="text">{' {'}</span><br />

                <span className="tab"/>
                    <span className="text">"name" </span>
                    <span className="other">:</span>
                    <span className="esp"> "Guilherme Ruas Luiz"</span>
                    <span className="other">,</span><br />
                
                <span className="tab"/>
                    <span className="text">"age" </span>
                    <span className="other">:</span>
                    <span className="var"> 27</span>
                    <span className="other">,</span><br />
                
                <span className="tab"/>
                    <span className="text">"bachelor's degree" </span>
                    <span className="other">:</span>
                    <span className="esp"> "Computer Science"</span>
                    <span className="other">,</span><br />
                
                <span className="tab"/>
                    <span className="text">"institution" </span>
                    <span className="other">:</span>
                    <span className="esp"> "ULBRA - Lutheran University of Brazil"</span>
                    <span className="other">,</span><br />
                
                <span className="tab"/>
                    <span className="text">"period" </span>
                    <span className="other">:</span>
                    <span className="esp"> "2013 - 2017"</span><br />
                    
            <span className="text">{'}'}</span><span className="other">;</span>
            <span className="blink_text">_</span>
        </p>
    </div>