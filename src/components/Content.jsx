import React from 'react'
import './Content.css'
import Home from './template/Home'
import AboutMe from './template/AboutMe'
import Experience from './template/Experience'
import Responsivety from './template/Responsivety'
import RandomFacts from './template/RandomFacts'

export default props =>
    <React.Fragment>
            <div className="content">
                <Home />
                <AboutMe />
                <Experience />
                <Responsivety />
                <RandomFacts />
            </div>
    </React.Fragment>