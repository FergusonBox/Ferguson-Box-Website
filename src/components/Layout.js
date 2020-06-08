import React from 'react'
import { Helmet } from 'react-helmet'
import BoxNav from '../components/BoxNav'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

import './Layout.scss'

const TemplateWrapper = ({ pageTitle, boxNav, children }) => {
  const { title, description, tags } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{pageTitle ? `${title} | ${pageTitle}` : `${title}`}</title>
        <meta name="description" content={description} />
        <meta name="tags" content={tags} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#007550"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Header />
      <Navbar />
      { boxNav &&
        <BoxNav boxNav={boxNav} />
      }
      <div className="page-content">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
