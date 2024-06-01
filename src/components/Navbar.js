import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import HamburgerMenu from 'react-hamburger-menu'

import './Navbar.scss'

const activeFromPx = 115

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      scrolling: false,
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { top } = document.body.getBoundingClientRect()
    ;-1 * top > activeFromPx
      ? this.setState({ scrolling: true })
      : this.setState({ scrolling: false })
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main-navigation">
        <div className="navbar__hamburgerMenu" data-target="navMenu">
          <HamburgerMenu
            isOpen={this.state.active}
            menuClicked={() => this.setState({ active: !this.state.active })}
            width={26}
            height={16}
            strokeWidth={3}
            color="#ffffff"
            animationDuration={0.2}
          />
        </div>
        <div className={`navbar__nav ${this.state.scrolling && 'scrolling'}`}>
          <div className="navbar__brand">
            <Link to="/" className="navbar__item" title="Logo">
              <img src={logo} alt="Ferguson Box" style={{ width: '128px' }} />
            </Link>
          </div>
          <div className={`navbar__menu ${this.state.active && 'open'}`}>
            <Link
              className="navbar__item"
              to="/our-company"
              activeClassName="active"
            >
              OUR COMPANY
            </Link>
            <Link
              className="navbar__item"
              to="/capabilities"
              activeClassName="active"
            >
              CAPABILITIES
            </Link>
            <Link
              className="navbar__item"
              to="/services"
              activeClassName="active"
            >
              SERVICES
            </Link>
            <Link
              className="navbar__item"
              to="/products"
              activeClassName="active"
            >
              PRODUCTS
            </Link>
            <Link
              className="navbar__item"
              to="/careers"
              activeClassName="active"
            >
              CAREERS
            </Link>
            <Link
              className="navbar__item"
              to="/contact"
              activeClassName="active"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
