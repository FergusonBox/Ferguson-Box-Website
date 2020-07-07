import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ISOCert from '../../static/uploads/iso_cert_badge.png'
import SFICert from '../../static/uploads/sfi_cert_badge.png'
import WBENCCert from '../../static/uploads/wbenc_cert_badge.png'

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
      ISOCertDoc: file(relativePath: { eq: "iso_certificate.pdf" }) {
        publicURL
      }
      SFICertDoc: file(relativePath: { eq: "sfi_certificate.pdf" }) {
        publicURL
      }
      WBENCCertDoc: file(relativePath: { eq: "wbenc_certificate.pdf" }) {
        publicURL
      }
    }
  `)
  return (
    <div className="header">
      <a href="/">
        <Img fixed={data.logo.childImageSharp.fixed} alt="Ferguson Box logo" />
      </a>
      <div className="header__certifications">
        <a className="header__certifications__item" href={data.ISOCertDoc.publicURL} target="_blank" rel="noreferrer">
          <img src={ISOCert} alt="ISO 9001 Certified"></img>
        </a>
        <a className="header__certifications__item" href={data.SFICertDoc.publicURL} target="_blank" rel="noreferrer">
          <img src={SFICert} alt="SFI Certified"></img>
        </a>
        <a className="header__certifications__item" href={data.WBENCCertDoc.publicURL} target="_blank" rel="noreferrer">
          <img src={WBENCCert} alt="Certified WBENC"></img>
        </a>
      </div>
    </div>
  )
}

export default Header
