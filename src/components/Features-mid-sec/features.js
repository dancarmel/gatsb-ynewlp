import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import './features.sass'

const Featuresmid = ({ heading, description, caption, link, image }) => (
   <section class="features-mid-block pt-0">
      <Container>
         <Row>
            <Col md={6}>
               <div class="features-mid-left pt-4">
                  <h2 class="mb-2">{heading}</h2>
                  <span class="section-title-line mb-4"></span>
                  <p class="mb-5">{description}</p>
                  <a href={link} className="btn btn-primary">{caption}</a>
               </div>
            </Col>
            <Col md={6}>
               <div class="features-mid-right text-right">
               <img className="img-fluid" src={image} alt={heading} />
               </div>
            </Col>
         </Row>
      </Container>
   </section>
)

export default Featuresmid
