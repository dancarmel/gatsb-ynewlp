import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import './whyus.sass'

const WhyUs = ({ heading, subheading, gridItems }) => (
  <section className="why-us-block bg-primary" id="why-us">
    <Container>
        <div className="section-title text-center">
           <span className="badge badge-white text-white">{heading}</span>
           <h2 className="text-white">{subheading}</h2>
           <span className="section-title-line section-title-line line-white"></span>
        </div>
        <Row>
          {gridItems.map(item => (
            <Col key={item.text} xs={12} md={3}>
              <div className="why-us-item text-center text-white">
                 <h1 className="mb-0 mt-3 text-white">{item.title}</h1>
                 <p className="mb-0 text-white">{item.text}</p>
              </div>
            </Col>
          ))}
       </Row>
    </Container>
  </section>
)

export default WhyUs
