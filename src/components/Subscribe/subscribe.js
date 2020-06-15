import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import './subscribe.sass'

const Subscribe = ({ props }) => (
 <section className="sign-up-block" id="sign-up">
    <Container>
      <div className="section-title text-center">
         <span className="badge badge-primary">LET’S START</span>
         <h2>Subscribe Us For Free Trial</h2>
         <span className="section-title-line"></span>
      </div>
      <Row>
      <Col md={8} className="mx-auto">
          <div className="sign-up-form">
             <form>
                <div className="input-group">
                   <input placeholder="Your Name" type="text" className="form-control" />
                   <input placeholder="Your Email" type="text" className="form-control" />
                   <div className="input-group-prepend">
                      <button className="btn btn-primary" type="button">Start Your Free Trial</button>
                   </div>
                </div>
             </form>
             <p className="mt-3 text-center">Create Your <a className="text-primary" href="/">FREE</a> Account Now &amp; Get 30 days <a class="text-primary" href="/">FREE</a> trial. No credit card required</p>
          </div>
      </Col>
      </Row>
    </Container>
  </section>
)

export default Subscribe
