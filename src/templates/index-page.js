import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'

import './index-page.scss'

export const IndexPageTemplate = ({
  heading,
  image,
  html
}) => (
  <div className="home-page">
    <h1>{heading}</h1>
    <Img fluid={image.childImageSharp.fluid} alt="Ferguson Box facility"></Img>
    <div 
      className="home-page__content" 
      dangerouslySetInnerHTML={{ __html: html }}>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const IndexPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        html={html}
        image={frontmatter.image}
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
      }
    }
  }
`
