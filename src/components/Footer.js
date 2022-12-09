import React from 'react'

import ISOCertDoc from '../../static/uploads/iso_certificate.pdf'
import SFICertDoc from '../../static/uploads/sfi_certificate.pdf'
import WBENCCertDoc from '../../static/uploads/wbenc_certificate.pdf'
import FSCCertDoc from '../../static/uploads/fsc_certificate.pdf'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__certifications">
        <a
          className="footer__certifications__item"
          href={FSCCertDoc}
          target="_blank"
          rel="noreferrer"
        >
          FSC Certified
        </a>
        <span>|</span>
        <a
          className="footer__certifications__item"
          href={ISOCertDoc}
          target="_blank"
          rel="noreferrer"
        >
          ISO 9001 Certified
        </a>
        <span>|</span>
        <a
          className="footer__certifications__item"
          href={SFICertDoc}
          target="_blank"
          rel="noreferrer"
        >
          SFI Certified
        </a>
        <span>|</span>
        <a
          className="footer__certifications__item"
          href={WBENCCertDoc}
          target="_blank"
          rel="noreferrer"
        >
          WBENC Certified
        </a>
      </div>
      <p className="footer__content">
        &copy; {new Date().getFullYear()} Ferguson Box Company USA | All Rights
        Reserved Ferguson Box Company
        <br />
        10820 Quality Drive | Charlotte, NC 28278 | 800-821-1023
      </p>
    </footer>
  )
}

export default Footer
