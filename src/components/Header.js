import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ISOCert from '../img/iso_cert_badge.png'
import SFICert from '../img/sfi_cert_badge.png'
import WBENCCert from '../img/wbenc_cert_badge.png'

import './Header.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "ferguson_box_logo.png" }) {
        childImageSharp {
          fixed(width: 180, height: 112) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div className="header">
      <a href="/">
        <Img fixed={data.logo.childImageSharp.fixed} alt="Ferguson Box logo" />
      </a>
      <div className="header__certifications">
        <div className="header__certifications__item">
          <img src={ISOCert} alt="ISO 9001 Certified"></img>
        </div>
        <div className="header__certifications__item">
          <img src={SFICert} alt="SFI Certified"></img>
        </div>
        <div className="header__certifications__item">
          <img src={WBENCCert} alt="Certified WBENC"></img>
        </div>
      </div>
    </div>
  )
}

export default Header
