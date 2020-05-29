import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import { Location } from '@reach/router'

import './Navbar.scss'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <Location>
          {({ location: { pathname } }) => (
            <>
              <div className="navbar__brand">
                <Link to="/" className="navbar__item" title="Logo">
                  <img src={logo} alt="Ferguson Box" style={{ width: '128px' }} />
                </Link>
                {/* Hamburger menu */}
                <div
                  className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div
                id="navMenu"
                className={`navbar__menu ${this.state.navBarActiveClass}`}
              >
                <div className="navbar__start">
                  <Link className="navbar__item" to="/our-company" activeClassName="active">
                    OUR COMPANY
                  </Link>
                  <Link className="navbar__item" to="/capabilities" activeClassName="active">
                    CAPABILITIES
                  </Link>
                  <Link className="navbar__item" to="/services" activeClassName="active">
                    SERVICES
                  </Link>
                  <Link className="navbar__item" to="/products" activeClassName="active">
                    PRODUCTS
                  </Link>
                  <Link className="navbar__item" to="/contact" activeClassName="active">
                    CONTACT US
                  </Link>
                </div>
              </div>
            </>
          )}
        </Location>
      </nav>
    )
  }
}

export default Navbar
