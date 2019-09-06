import React from 'react'
import './Header.css'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    }

    render(){
        const { width } = this.state;
        const isMobile = width <= 575;
        console.log(isMobile)

        return (
            <header className="header">
                <a href="#root" >Home</a>
                <a href="#degree" >About me</a>
                <a href="#contact" >Contact</a>
            </header>
        )
    }
}

export default Header