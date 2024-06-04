
import React from 'react'
import PropTypes from 'prop-types'

import './ExternalLink.scss'

const ExternalLink = ({ label, link }) => (
  <div className="external-link">
        <a href={link} target="_blank" rel="noreferrer">
            {label}
        </a>
  </div>
)

ExternalLink.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

export default ExternalLink
