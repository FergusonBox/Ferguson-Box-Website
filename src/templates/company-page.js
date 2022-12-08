import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ScrollToTopButton from '../components/ScrollToTopButton'
import LeadershipElement from '../components/LeadershipElement'

import '../global.scss'
import './company-page.scss'

export const CompanyPageTemplate = ({
  heading,
  leadershipHeading,
  leadership,
  html
}) => (
  <div className="company-page">
    <h1>{heading}</h1>
    <div 
      className="company-page__content" 
      dangerouslySetInnerHTML={{ __html: html }}>
    </div>
    <hr></hr>
    <h3>{leadershipHeading}</h3>
    <div className="company-page__leadership">
      {leadership && leadership.map(({
          photo,
          name,
          title,
          email
        }) => (
        <LeadershipElement
          photo={photo}
          name={name}
          title={title}
          email={email}
        />
      ))}
    </div>
    <ScrollToTopButton />
  </div>
)

CompanyPageTemplate.propTypes = {
  heading: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  leadershipHeading: PropTypes.string.isRequired,
  leadership: PropTypes.array.isRequired
}

const CompanyPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout pageTitle={frontmatter.pageTitle}>
      <CompanyPageTemplate
        html={html}
        heading={frontmatter.heading}
        leadershipHeading={frontmatter.leadershipHeading}
        leadership={frontmatter.leadership}
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
        leadershipHeading
        leadership {
          photo {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
            }
          }
          name
          title
          email
        }
      }
    }
  }
`