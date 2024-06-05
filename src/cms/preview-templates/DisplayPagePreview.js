import React from 'react'
import PropTypes from 'prop-types'
import { DisplayPageTemplate } from '../../templates/display-page'

const DisplayPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const { heading, careersLink, careersLinkLabel, html } = data

  if (data) {
    return <DisplayPageTemplate html={html} heading={heading} careersLink={careersLink} careersLinkLabel={careersLinkLabel} />
  } else {
    return <div>Loading...</div>
  }
}

DisplayPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default DisplayPagePreview
