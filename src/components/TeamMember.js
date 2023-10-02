import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'

import './TeamMember.scss'

const TeamMember = ({ photo, name, title, email }) => (
  <div className="team-member">
    <GatsbyImage
      image={photo.childImageSharp.gatsbyImageData}
      alt={name}
      className="team-member__photo"
    ></GatsbyImage>
    <span>{name}</span>
    <i>{title}</i>
  </div>
)

TeamMember.propTypes = {
  photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default TeamMember
