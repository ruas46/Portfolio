import React from 'react'
import './Header.css'
import HeaderButton from './HeaderButton'
import HeaderDesktop from './HeaderDesktop'
import HeaderMobile from './HeaderMobile'
import HeaderIcon from '../../assets/img/icon.png'
import {Animated} from "react-animated-css";

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
        const isMobile = width <= 820;
        
        return (
            <header className="header">
                <Animated animationIn="fadeInDown">
                    <div className="header-icon">
                        <a href="/" ><img src={HeaderIcon} alt="Icon" /></a>
                    </div>
                    { isMobile
                    ? <HeaderMobile isVisible={headerMobileOpen}>
                        <HeaderButton onClick={this.handleHeaderChange} changeIcon={headerMobileOpen} />
                      </HeaderMobile>
                    : <HeaderDesktop />
                    }
                </Animated>
            </header>
        )
    }
}

export default Header