import React from 'react'
import PropTypes from 'prop-types'
import { CompanyPageTemplate } from '../../templates/company-page'

const CompanyPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const { heading, html } = data

  if (data) {
    return <CompanyPageTemplate html={html} heading={heading} />
  } else {
    return <div>Loading...</div>
  }
}

CompanyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CompanyPagePreview
