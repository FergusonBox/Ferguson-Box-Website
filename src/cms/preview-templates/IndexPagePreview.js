import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const {
    heading,
    image,
    quickLinks,
    html
  } = data;

  if (data) {
    return (
      <IndexPageTemplate
        html={html}
        image={getAsset(image)}
        quickLinks={quickLinks}
        heading={heading}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
