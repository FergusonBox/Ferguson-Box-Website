import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import './Footer.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      ISOCert: file(relativePath: { eq: "iso_certificate.pdf" }) {
        publicURL
      }
      SFICert: file(relativePath: { eq: "sfi_certificate.pdf" }) {
        publicURL
      }
      WBENCCert: file(relativePath: { eq: "wbenc_certificate.pdf" }) {
        publicURL
      }
    }
  `)
  return (
    <footer className="footer">
      <div className="footer__certifications">
        <a className="footer__certifications__item" href={data.ISOCert.publicURL} target="_blank">
          ISO 9001 Certified
        </a>
        <span>|</span>
        <a className="footer__certifications__item" href={data.SFICert.publicURL} target="_blank">
          SFI Certified
        </a>
        <span>|</span>
        <a className="footer__certifications__item" href={data.WBENCCert.publicURL} target="_blank">
          WBENC Certified
        </a>
      </div>
      <p className="footer__content">&copy; {new Date().getFullYear()} Ferguson Box Company USA | All Rights Reserved Ferguson Box Company<br />10820 Quality Drive | Charlotte, NC 28278 | 800-821-1023</p>
    </footer>
  )
}

export default Footer
