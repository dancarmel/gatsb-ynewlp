import React from 'react'
import ModalVideo from 'react-modal-video'
import './video.sass'
import { FaPlay } from "react-icons/fa"

class Videoblock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }
 
  render () {
    console.log(this.props);
    return (
      <section className="video-block pb-0" id="video">
         <div className="container">
            <div className="section-title text-center">
               <span className="badge badge-info">{this.props.heading} 2</span>
               <h2>{this.props.subheading}</h2>
               <span className="section-title-line"></span>
            </div>
            <div className="row">
               <div className="col-md-11 mx-auto">
                  <div className="video-item text-center">
                     <p>
                        <button className="play-btn" onClick={this.openModal}> <i className="fas fa-play"></i> 
                          <FaPlay></FaPlay>
                        </button>
                        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.props.video} onClose={() => this.setState({isOpen: false})} />
                     </p>
                     <img className="img-fluid mt-5" src={this.props.image} alt="" />
                  </div>
               </div>
            </div>
         </div>
      </section>
    )
  }
}

export default Videoblock


