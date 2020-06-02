import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import QuickLink from '../components/QuickLink'

import './index-page.scss'

export const IndexPageTemplate = ({
  heading,
  image,
  quickLinks,
  html
}) => (
  <div className="home-page">
    <h1>{heading}</h1>
    <Img fluid={image.childImageSharp.fluid} alt="Ferguson Box facility"></Img>
    <div 
      className="home-page__content" 
      dangerouslySetInnerHTML={{ __html: html }}>
    </div>
    <div className="home-page__quick-links">
      {quickLinks && quickLinks.map(({
          title,
          text,
          link,
          docLink,
          docLinkText
        }) => (
        <QuickLink
          title={title}
          text={text}
          link={link}
          docLink={docLink}
          docLinkText={docLinkText}
        />
      ))}
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string.isRequired,
  
  quickLinks: PropTypes.array,
}

const IndexPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        html={html}
        image={frontmatter.image}
        quickLinks={frontmatter.quickLinks}
        heading={frontmatter.heading}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      html
      frontmatter {
        heading
        image {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        quickLinks {
          title
          text
          link
          docLink {
            publicURL
          }
          docLinkText
        }
      }
    }
  }
`