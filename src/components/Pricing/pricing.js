import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import './pricing.sass'

const Pricing = ({ data }) => (
   <section className="pricing-block" id="pricing">
      <Container>
         <div className="section-title text-center">
            <span className="badge badge-success">Our Pricing</span>
            <h2>Our Pricing &amp; Plans</h2>
            <span className="section-title-line"></span>
         </div>
         <Row>
         {data.map(price => (
            <Col key={price.plan} md={4}>
               <div className="pricing-item text-center">
                  <div className="custom-card card card-outline-primary h-100">
                     <div className={`card-body ${price.recommended ? 'bg-primary' : ''}`}>
                        <h6 className={`${price.recommended ? 'text-white' : ''}`}>{price.plan}</h6>
                        <div className={`display-4 ${price.recommended ? 'text-white' : ''}`}>{price.price}</div>
                        <div className={`font-italic ${price.recommended ? 'text-white' : ''}`}>{price.description}</div>
                     </div>
                     <ul className="list-group list-group-flush">
                        {price.items.map(item => (
                          <li key={item} className="list-group-item">
                            {item}
                          </li>
                        ))}
                        <li className="list-group-item">
                           <a href="/" className={`btn ${price.recommended ? 'btn-primary btn-lg' : 'btn-outline-primary'}`}>CHOOSE PLAN</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </Col>
         ))}
         </Row>
      </Container>
   </section>
)

export default Pricing
