import React from 'react'
import './start.sass'

const Download = ({ props }) => (
    <section className="trial-block" id="trial">
         <div className="container">
            <div className="section-title text-center">
               <span className="badge badge-info">Get Started</span>
               <h2>Start your free trial. No credit card requires</h2>
               <span className="section-title-line section-title-line"></span>
            </div>
            <div className="row">
               <div className="col-md-8 mx-auto">
                  <form name="sentMessage" id="contactForm" novalidate="">
                     <div className="control-group form-group">
                        <div className="controls">
                           <input type="text" placeholder="Full Name" className="form-control" id="name" required="" data-validation-required-message="Please enter your name."/>
                           <p className="help-block"></p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="control-group form-group col-md-6">
                           <div className="controls">
                              <input type="tel" placeholder="Phone Number" className="form-control" id="phone" required="" data-validation-required-message="Please enter your phone number."/>
                           <div className="help-block"></div></div>
                        </div>
                        <div className="control-group form-group col-md-6">
                           <div className="controls">
                              <input type="email" placeholder="Email Address" className="form-control" id="email" required="" data-validation-required-message="Please enter your email address." />
                           <div className="help-block"></div></div>
                        </div>
                     </div>
                     <div className="control-group form-group">
                        <div className="controls">
                           <textarea rows="4" cols="100" placeholder="Message" className="form-control" id="message" required="" data-validation-required-message="Please enter your message" maxlength="999" ></textarea>
                        <div className="help-block"></div></div>
                     </div>
                     <div id="success"></div>
                     
                     <button type="submit" className="btn btn-primary btn-lg btn-block">START YOUR FREE TRIAL NOW</button>
                  </form>
                  <p className="mt-3 text-center mb-0">Create Your <a className="text-primary" href="/">FREE</a> Account Now &amp; Get 30 days <a className="text-primary" href="/">FREE</a> trial. No credit card required</p>
               </div>
            </div>
         </div>
      </section>
)

export default Download
