import React from 'react'
import './Degree.css'
import Img from '../../assets/img/10.png'


export default props =>
    <div id="degree">
        <img id="degree-img" src={Img} alt="Img" height="200" width="200" />
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
                    <span className="text">"degree" </span>
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