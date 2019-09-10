import React from 'react'
import ContactIcon from './ContactIcon'

export default props =>
    <div id="contact">
        <ContactIcon href="https://linkedin.com/in/guilherme-ruas-luiz-6aa2b6108" icon="linkedin" label="Go to my Linkedin" />
        <ContactIcon href="mailto:guilhermeruas@hotmail.com" icon="envelope" label="Send me a email" />
        <ContactIcon href="https://github.com/ruas46" icon="github" label="Go to my Github" />
        <ContactIcon href="https://github.com/ruas46/Portfolio" icon="code" label="See this page source on Github" />
    </div>