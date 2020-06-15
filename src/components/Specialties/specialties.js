import React from 'react'
import { Container } from 'react-bootstrap'
import './specialties.sass'

const Specialities = ({ heading, discription, image, gridItems }) => (
    <section className="amazing-dashboard-block" id="amazing-dashboard">
       <Container>
          <div className="row">
             <div className="col-md-6">
                <div className="amazing-dashboard-left">
                   <h2 className="mb-2">{heading}</h2>
                   <span className="section-title-line mb-4"></span>
                   <p className="mb-5">{discription}</p>
                    {gridItems.map(item => (
                    <div>
                      <h5>{item.title}</h5>
                      <p className="mb-5">{item.text}</p>
                    </div>
                    ))}
                </div>
             </div>
             <div className="col-md-6">
                <div className="amazing-dashboard-right text-right">
                   <img className="amazing-dashboard" src={image} alt={heading} />
                </div>
             </div>
          </div>
       </Container>
    </section>
)

export default Specialities
