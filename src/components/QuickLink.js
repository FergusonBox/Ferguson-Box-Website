import React from 'react'
import PropTypes from 'prop-types'

import './QuickLink.scss'

const QuickLink = ({ 
  title,
  text,
  link,
  docLink,
  docLinkText 
}) => (
    <a className="quick-link" href={link}>
      <h2>{title}</h2>
      <p>{text}</p>
      {docLinkText && <a href={docLink.publicURL} className="quick-link__link">{docLinkText}</a>}
    </a>
)

QuickLink.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  docLink: PropTypes.string,
  docLinkText: PropTypes.string
}
 
export default QuickLink
