import React from 'react'
import PropTypes from 'prop-types'
import { ContactPageTemplate } from '../../templates/contact-page'

const ContactPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  const {
    heading,
    image,
    phoneNum1,
    phoneNum2,
    faxNum,
    email,
    officeDays,
    officeHours,
    addressLine1,
    addressLine2,
    directions,
  } = data

  if (data) {
    return (
      <ContactPageTemplate
        heading={heading}
        image={image}
        phoneNum1={phoneNum1}
        phoneNum2={phoneNum2}
        faxNum={faxNum}
        email={email}
        officeDays={officeDays}
        officeHours={officeHours}
        addressLine1={addressLine1}
        addressLine2={addressLine2}
        directions={directions}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ContactPagePreview
