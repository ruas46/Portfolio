import React from 'react'
import './Header.css'
import HeaderButton from './HeaderButton'
import HeaderLinks from './HeaderLinks'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
          width: window.innerWidth,
          headerMobileOpen: false
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

    handleHeaderChange = () => {
        this.setState({ headerMobileOpen: !this.state.headerMobileOpen })
    }

    render(){
        const { width, headerMobileOpen } = this.state;
        const isMobile = width <= 575;
        
        console.log('isMobile: ' + isMobile)
        console.log('headerMobileOpen: ' + headerMobileOpen)

        return (
            <header className="header">
                { isMobile
                  ? <HeaderButton onClick={this.handleHeaderChange} />
                  : <HeaderLinks />
                }

                { isMobile && headerMobileOpen
                  ? <HeaderLinks />
                  : null
                }
            </header>
        )
    }
}

export default Header