import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import './download.sass'

const Download = ({ heading, subheading, text, caption, link }) => (
    <section className="download-app-block bg-primary" id="download-app">
         <Container>
            <Col className="section-title text-center">
               <span className="badge badge-white text-white">{heading}</span>
               <h2 className="text-white">{subheading}</h2>
               <span className="section-title-line section-title-line line-white"></span>
            </Col>
            <Row>
               <Col className="col-md-8 mx-auto text-center">
                  <p className="lead mb-5 text-white">{text}</p>
                  <p><a href={link} className="btn btn-light btn-lg">{caption}</a></p>
               </Col>
            </Row>
         </Container>
      </section>
)

export default Download
