import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import './team.sass'
import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaGooglePlus } from "react-icons/fa"

const Team = ({ heading, subheading, gridItems }) => (
    <section className="team-block" id="team">
         <Container>
            <div className="section-title text-center">
               <span className="badge badge-danger">{heading}</span>
               <h2>{subheading}</h2>
               <span className="section-title-line"></span>
            </div>
            <Row>
               {gridItems.map(item => (
                  <Col key={item.text} xs={12} md={4}>
                    <div className="team-item">
                      <div className="custom-card card card h-100 text-center">
                        <img className="card-img-top" src={item.image.publicURL} alt="" />
                        <div className="card-body">
                          <h4 className="card-title">{item.title}</h4>
                          <h6 className="card-subtitle mb-2 text-muted">{item.designation}</h6>
                          <p className="card-text">{item.text}</p>
                        </div>
                        <div className="card-footer social-icons">
                          <a href={item.fb}><FaFacebook></FaFacebook></a>
                          <a href={item.tw}><FaTwitter></FaTwitter></a>
                          <a href={item.goo}><FaGooglePlus></FaGooglePlus></a>
                        </div>
                      </div>
                    </div>
                  </Col>
               ))}
            </Row>
         </Container>
      </section>
)

export default Team
