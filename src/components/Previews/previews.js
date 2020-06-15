import React from 'react'
import './previews.sass'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Previews = ({ heading, subheading, gridItems }) => (
    <section className="screens-block bg-primary" id="screens">
       <div className="screens-container-fluid">
          <div className="section-title text-center">
             <span className="badge badge-white text-white">Previews</span>
             <h2 className="text-white">Screenshot In Details</h2>
             <span className="section-title-line section-title-line line-white"></span>
          </div>
          
          <div className="screens-row text-center">
            <OwlCarousel
                className="screens owl-carousel owl-theme owl-loaded owl-drag"
                loop
                center={true}
                margin={10}
                nav
                items={2}
                navText={['<span class="icon_arrow"><</span>', '<span class="icon_arrow">></span>']} 
            >
            {gridItems.map(item => (
                <div className="item">
                    <img src={item.image.publicURL} className="img-responsive" alt={item.title} />
                </div>
            ))}
            </OwlCarousel> 
       </div>
 </div>
       
    </section>
)

export default Previews
