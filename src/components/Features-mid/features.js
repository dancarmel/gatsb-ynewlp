import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import './features.sass'

const Featuresmid = ({ heading, description, caption, link, image }) => (
  <section className="features-mid-block" id="features-mid">
     <Container>
        <Row>
           <Col md={6}>
              <div className="features-mid-right text-left">
                 <img className="img-fluid" src={image} alt={heading} />
              </div>
           </Col>
           <Col md={6}>
              <div className="features-mid-left pt-4">
                 <h2 className="mb-2">{heading}</h2>
                 <span className="section-title-line mb-4"></span>
                 <p className="mb-5">{description}</p>
                 <a href={link} className="btn btn-primary">{caption}</a>
              </div>
           </Col>
        </Row>
     </Container>
  </section>
)

export default Featuresmid
