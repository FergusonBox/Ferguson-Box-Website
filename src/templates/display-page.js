/* eslint-disable limited-exports-page-templates */

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ScrollToTopButton from '../components/ScrollToTopButton'
import ExternalLink from '../components/ExternalLink'

import '../global.scss'
import './display-page.scss'

export const DisplayPageTemplate = ({ heading, careersLink, careersLinkLabel, html }) => (
  <div className="display-page">
    <h1>{heading}</h1>
    <div
      className="display-page__content"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
    {
      careersLink && careersLinkLabel && (
        <ExternalLink link={careersLink} label={careersLinkLabel} />
      )
    }
    <ScrollToTopButton />
  </div>
)

DisplayPageTemplate.propTypes = {
  heading: PropTypes.string.isRequired,
  careersLink: PropTypes.string,
  careersLinkLabel: PropTypes.string,
}

const DisplayPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout pageTitle={frontmatter.pageTitle} boxNav={frontmatter.boxNav}>
      <DisplayPageTemplate 
        html={html} 
        heading={frontmatter.heading} 
        careersLink={frontmatter.careersLink}
        careersLinkLabel={frontmatter.careersLinkLabel}
      />
    </Layout>
  )
}

DisplayPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
      frontmatter: PropTypes.object,
    }),
  }),
}

export default DisplayPage

export const pageQuery = graphql`
  query DisplayPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        pageTitle
        heading
        boxNav {
          title
          IDlink
        }
        careersLink
        careersLinkLabel
      }
    }
  }
`
