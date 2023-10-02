/* eslint-disable limited-exports-page-templates */

import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ScrollToTopButton from '../components/ScrollToTopButton'
import TeamMember from '../components/TeamMember'

import '../global.scss'
import './company-page.scss'

export const CompanyPageTemplate = ({
  heading,
  ourTeamHeading,
  team,
  html,
}) => (
  <div className="company-page">
    <h1>{heading}</h1>
    <div
      className="company-page__content"
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
    <hr></hr>
    <h3>{ourTeamHeading}</h3>
    <div className="company-page__team">
      {team &&
        team.map(({ photo, name, title }) => (
          <TeamMember
            photo={photo}
            name={name}
            title={title}
          />
        ))}
    </div>
    <ScrollToTopButton />
  </div>
)

CompanyPageTemplate.propTypes = {
  heading: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  ourTeamHeading: PropTypes.string.isRequired,
  team: PropTypes.array.isRequired,
}

const CompanyPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout pageTitle={frontmatter.pageTitle}>
      <CompanyPageTemplate
        html={html}
        heading={frontmatter.heading}
        ourTeamHeading={frontmatter.ourTeamHeading}
        team={frontmatter.team}
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
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        pageTitle
        heading
        ourTeamHeading
        team {
          photo {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, quality: 100)
            }
          }
          name
          title
        }
      }
    }
  }
`
