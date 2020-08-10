import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import QuickLink from '../components/QuickLink'

import '../global.scss'
import './index-page.scss'

import OddLotsDoc from '../../static/uploads/odd_lots_current_stock.pdf'
import StockBoxesDoc from '../../static/uploads/stock_boxes_web.pdf'

export const IndexPageTemplate = ({
  heading,
  image,
  title1,
  text1,
  title2,
  text2,
  docLinkText2,
  title3,
  text3,
  docLinkText3,
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
      <QuickLink
        title={title1}
        text={text1}
      />
      <QuickLink
        title={title2}
        text={text2}
        docLink={OddLotsDoc}
        docLinkText={docLinkText2}
      />
      <QuickLink
        title={title3}
        text={text3}
        docLink={StockBoxesDoc}
        docLinkText={docLinkText3}
      />
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  docLinkText2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
  docLinkText3: PropTypes.string.isRequired,
}

const IndexPage = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        html={html}
        image={frontmatter.image}
        quickLinks={frontmatter.quickLinks}
        title1={frontmatter.title1}
        text1={frontmatter.text1}
        title2={frontmatter.title2}
        text2={frontmatter.text2}
        docLinkText2={frontmatter.docLinkText2}
        title3={frontmatter.title3}
        text3={frontmatter.text3}
        docLinkText3={frontmatter.docLinkText3}
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
        title1
        text1
        title2
        text2
        docLinkText2
        title3
        text3
        docLinkText3
      }
    }
  }
`