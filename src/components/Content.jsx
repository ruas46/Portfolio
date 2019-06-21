import React from 'react'
import './Content.css'
import Home from './template/Home'
import Degree from './template/Degree'
import Langueges from './template/Languages'
import Responsivety from './template/Responsivety'
import Contact from './template/Contact'

export default props =>
    <React.Fragment>
            <div className="content">
                <Home />
                <Degree />
                <Langueges />
                <Responsivety />
                <Contact />
            </div>
    </React.Fragment>