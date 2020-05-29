import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
      cert1: file(relativePath: { eq: "iso_cert_badge.png" }) {
        childImageSharp {
          fixed(width: 180, height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cert2: file(relativePath: { eq: "sfi_cert_badge.png" }) {
        childImageSharp {
          fixed(width: 150, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      cert3: file(relativePath: { eq: "wbenc_cert_badge.png" }) {
        childImageSharp {
          fixed(width: 150, height: 60) {
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
          <Img fixed={data.cert1.childImageSharp.fixed} alt="Ferguson Box logo" />
        </div>
        <div className="header__certifications__item">
          <Img fixed={data.cert2.childImageSharp.fixed} alt="Ferguson Box logo" />
        </div>
        <div className="header__certifications__item">
          <Img fixed={data.cert3.childImageSharp.fixed} alt="Ferguson Box logo" />
        </div>
      </div>
    </div>
  )
}

export default Header
