import React from 'react'
import PropTypes from 'prop-types'

import './QuickLink.scss'

const QuickLink = ({ 
  title,
  text,
  link,
  linkText 
}) => (
    <a className="quick-link" href={link}>
      <h2>{title}</h2>
      <p>{text}</p>
      {linkText && <a href={link} className="quick-link__link">{linkText}</a>}
    </a>
)

QuickLink.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string
}
 
export default QuickLink
