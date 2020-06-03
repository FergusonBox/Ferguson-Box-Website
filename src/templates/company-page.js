import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

import './company-page.scss'

export const CompanyPageTemplate = ({
  heading,
  html
}) => (
  <div className="company-page">
    <h1>{heading}</h1>
    <div 
      className="company-page__content" 
      dangerouslySetInnerHTML={{ __html: html }}>
    </div>
  </div>
)

CompanyPageTemplate.propTypes = {
  heading: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

const CompanyPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout pageTitle={frontmatter.pageTitle}>
      <CompanyPageTemplate
        html={html}
        heading={frontmatter.heading}
      />
    </Layout>
  )
}

CompanyPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
      frontmatter: PropTypes.object,
    }),
  }),
}

export default CompanyPage

export const pageQuery = graphql`
  query CompanyPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
      frontmatter {
        pageTitle
        heading
      }
    }
  }
`