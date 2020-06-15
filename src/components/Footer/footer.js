import React from 'react'
import './Footer.sass'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { TiSocialSkypeOutline } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

const Footer = class extends React.Component {
   render() {
      return (
         <footer class="py-5 text-center bg-primary">
            <div class="container">
               <div class="social-icons mb-3">
                  <a rel="noopener noreferrer" target="_blank" href="https://dribbble.com/">
                     <TiSocialDribbble/>
                  </a>
                  <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/">
                     <TiSocialFacebook/>
                  </a>
                  <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/">
                     <TiSocialInstagram/>
                  </a>
                  <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/">
                     <TiSocialLinkedin/>
                  </a>
                  <a rel="noopener noreferrer" target="_blank" href="https://in.pinterest.com/">
                     <TiSocialPinterest/>
                  </a>
                  <a rel="noopener noreferrer" target="_blank" href="https://www.skype.com/en/">
                     <TiSocialSkypeOutline/>
                  </a>
                  <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/">
                     <TiSocialTwitter/>
                  </a>
                  <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/">
                     <TiSocialYoutube/>
                  </a>
               </div>
               <p class="mt-0 mb-0 text-white"> 
                  © Copyright 2018 Osahan. All Rights Reserved 
               </p>
               <p class="mt-0 mb-0 text-white"> Made with <i class="fas fa-heart heart-icon"></i> by
                  <a class="text-white" rel="noopener noreferrer" target="_blank" href="https://askbootstrap.com/"> 
                     Ask Bootstrap 
                  </a>
               </p>
            </div>
         </footer>
      )
   }
}

export default Footer
