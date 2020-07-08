import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import './LeadershipElement.scss'

const LeadershipElement = ({ 
  photo,
  name,
  title,
  email 
}) => (
    <div className="leadership-element" >
      <Img fluid={photo.childImageSharp.fluid} alt={name} className="leadership-element__photo"></Img>
      <span>{name}</span>
      <i>{title}</i>
      <a href={`mailto:` + email} >{email}</a>
    </div>
)

LeadershipElement.propTypes = {
  photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}
 
export default LeadershipElement
