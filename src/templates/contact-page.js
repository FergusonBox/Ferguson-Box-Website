/* eslint-disable limited-exports-page-templates */

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from '../components/Layout'

import '../global.scss'
import './contact-page.scss'

export const ContactPageTemplate = ({
  heading,
  image,
  phoneNum1,
  phoneNum2,
  faxNum,
  email,
  officeDays,
  officeHours,
  addressLine1,
  addressLine2,
  directions
}) => (
  <div className="contact-page">
    <h1>{heading}</h1>
    <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="Ferguson Box building entrance" className="contact-page__photo"></GatsbyImage>
    <div className="contact-page__info">
      <p>PHONE: <a href={"tel:" + phoneNum1.replace(/-|\./g,'')}>{phoneNum1}</a> <span>■</span> <a href={"tel:" + phoneNum2.replace(/-|\./g,'')}>{phoneNum2}</a> </p>
      <p>FAX: {faxNum}</p>
      <p>E-MAIL: <a href={"mailto:" + email}>{email}</a></p>
      <p>OFFICE HOURS: {officeDays} <span>■</span> {officeHours}</p>
    </div>
    <div className="contact-page__address">
      <p>CORPORATE/SALES OFFICES <span>■</span> MANUFACTURING PLANT</p>
      <p>{addressLine1}</p>
      <p>{addressLine2}</p>
      <p>{directions}</p>
    </div>
    
    <iframe allowfullscreen frameborder="0" height="450" className="google_maps" title="googleMaps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.0126953917106!2d-80.98749413705049!3d35.13866060972075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569a00ec909029%3A0x401e45301e7065ae!2sFerguson+Box!5e0!3m2!1sen!2sus!4v1465611443781" width="600"></iframe>

  </div>
)

ContactPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pageTitle: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  phoneNum1: PropTypes.string.isRequired,
  phoneNum2: PropTypes.string,
  faxNum: PropTypes.string,
  email: PropTypes.string.isRequired,
  officeDays: PropTypes.string.isRequired,
  officeHours: PropTypes.string.isRequired,
  addressLine1: PropTypes.string.isRequired,
  addressLine2: PropTypes.string.isRequired,
  directions: PropTypes.string.isRequired
}

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout pageTitle={frontmatter.pageTitle}>
      <ContactPageTemplate
        heading={frontmatter.heading}
        image={frontmatter.image}
        phoneNum1={frontmatter.phoneNum1}
        phoneNum2={frontmatter.phoneNum2}
        faxNum={frontmatter.faxNum}
        email={frontmatter.email}
        officeDays={frontmatter.officeDays}
        officeHours={frontmatter.officeHours}
        addressLine1={frontmatter.addressLine1}
        addressLine2={frontmatter.addressLine2}
        directions={frontmatter.directions}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    }),
  }),
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      frontmatter {
        heading
        pageTitle
        image {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 420, height: 280)
          }
        }
        phoneNum1
        phoneNum2
        faxNum
        email
        officeDays
        officeHours
        addressLine1
        addressLine2
        directions
      }
    }
  }
`