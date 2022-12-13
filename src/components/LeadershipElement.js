import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

import './LeadershipElement.scss'

const LeadershipElement = ({ photo, name, title, email }) => (
  <div className="leadership-element">
    <GatsbyImage
      image={photo.childImageSharp.gatsbyImageData}
      alt={name}
      className="leadership-element__photo"
    ></GatsbyImage>
    <span>{name}</span>
    <i>{title}</i>
    <a href={`mailto:` + email}>{email}</a>
  </div>
)

LeadershipElement.propTypes = {
  photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}

export default LeadershipElement
