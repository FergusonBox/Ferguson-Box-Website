import React from 'react'
import PropTypes from 'prop-types'

import './QuickLink.scss'

const QuickLink = ({ 
  title,
  text,
  docLink,
  docLinkText 
}) => (
    <div className="quick-link" >
      <h2>{title}</h2>
      <p>{text}</p>
      {docLinkText && <a href={docLink.publicURL} className="quick-link__link">{docLinkText}</a>}
    </div>
)

QuickLink.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  docLink: PropTypes.string,
  docLinkText: PropTypes.string
}
 
export default QuickLink
