import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import {Row, Col, Container } from 'react-bootstrap'
import './Features.sass'

const FeatureGrid = ({ heading, subheading, gridItems }) => (
  <section className="features-block" id="features">
  <Container>
    <div className="section-title text-center">
       <span className="badge badge-primary">{heading}</span>
        <h2>{subheading}</h2>
       <span className="section-title-line"></span>
    </div>
    <Row>
    {gridItems.map(item => (
      <Col key={item.text} xs={12} md={3}>
        <div className="features-item text-left">
          <img src={item.image.publicURL} />
           <h5 className="mb-3">{item.title} </h5>
           <p>{item.text}</p>
        </div>
      </Col>
    ))}
    </Row>
  </Container>
  </section>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
