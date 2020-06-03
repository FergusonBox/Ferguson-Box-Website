import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import CompanyPagePreview from './preview-templates/CompanyPagePreview'
import DisplayPagePreview from './preview-templates/DisplayPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('company', CompanyPagePreview)
CMS.registerPreviewTemplate('display', DisplayPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
