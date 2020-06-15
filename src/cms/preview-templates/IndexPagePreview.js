import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        image={data.image}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
        specialtiesintro={data.specialtiesintro || { specialtiesblurbs: [] }}
        whyusintro={data.whyusintro || { whyusblurbs: [] }}
        videointro={data.videointro}
        featuresoneintro={data.featuresoneintro}
        testimonialintro={data.testimonialintro}
        teamintro={data.teamintro}
        downloadintro={data.downloadintro}
        pricing={data.pricing}
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
