import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ISOCert from '../../static/uploads/iso_cert_badge.png'
import SFICert from '../../static/uploads/sfi_cert_badge.png'
import WBENCCert from '../../static/uploads/wbenc_cert_badge.png'

import ISOCertDoc from '../../static/uploads/iso_certificate.pdf'
import SFICertDoc from '../../static/uploads/sfi_certificate.pdf'
import WBENCCertDoc from '../../static/uploads/wbenc_certificate.pdf'

import './Header.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "ferguson_box_logo.png" }) {
        childImageSharp {
          fixed(width: 180, height: 112) {
            ...GatsbyImageSharpFixed_tracedSVG
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
        <a className="header__certifications__item" href={ISOCertDoc} target="_blank" rel="noreferrer">
          <img src={ISOCert} alt="ISO 9001 Certified"></img>
        </a>
        <a className="header__certifications__item" href={SFICertDoc} target="_blank" rel="noreferrer">
          <img src={SFICert} alt="SFI Certified"></img>
        </a>
        <a className="header__certifications__item" href={WBENCCertDoc} target="_blank" rel="noreferrer">
          <img src={WBENCCert} alt="Certified WBENC"></img>
        </a>
      </div>
    </div>
  )
}

export default Header
