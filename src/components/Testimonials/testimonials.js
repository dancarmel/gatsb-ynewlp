import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import './testimonials.sass'

const Testimonials = ({ heading, subheading, gridItems }) => (
<section className="testimonials-block" id="testimonials">
   <Container>
      <div className="section-title text-center">
         <span className="badge badge-primary">{heading}</span>
         <h2>{subheading}</h2>
         <span className="section-title-line"></span>
      </div>
      <Row>
         {gridItems.map(item => (
           <Col key={item.text} xs={12} md={4}>
            <div className="custom-card testimonials-item text-center">
               <img className="img-fluid mb-4" src={item.image.publicURL} alt={item.title} />
               <p className="mb-4">{item.text}</p>
               <h6 className="mb-0 text-primary">- {item.title}</h6>
               <small>{item.title}</small>
            </div>
           </Col>
          ))}
      </Row>
   </Container>
</section>
)

export default Testimonials
