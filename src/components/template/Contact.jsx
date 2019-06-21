import React from 'react'
import './Contact.css'
import ContactIcon from './ContactIcon'

export default props =>
    <div className="contact">
        <ContactIcon href="https://linkedin.com/in/guilherme-ruas-luiz-6aa2b6108" icon="linkedin" />
        <ContactIcon href="mailto:guilhermeruas@hotmail.com" icon="envelope" />
        <ContactIcon href="https://github.com/ruas46" icon="github" />
        <ContactIcon href="https://github.com/ruas46/Portfolio" icon="code" />
    </div>