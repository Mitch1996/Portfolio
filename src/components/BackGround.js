import React ,  {Component} from "react";
import WOW from 'wowjs'
import Tilt from 'react-parallax-tilt'
import logo from '../assets/Mitch.png'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Background extends Component {

   componentDidMount() {
      const WOW = require('wowjs');

      window.wow = new WOW.WOW({
         live: false
      });

      window.wow.init();
   }

   componentWillMount() {
      const styles = {
         body: {
            fontFamily: 'Work Sans',
            fontSize: 13,
            fontWeight: 400,
            lineHeight: 1.4,
            margin: 0,
            padding: 0,
            color: '#FFF',
            backgroundColor: '#1E2326',
            overflow: 'auto'
         }
      }

      for (let i in styles.body) {
         document.body.style[i] = styles.body[i];
      }
   }

   render() {
      return (
         <div id="home" className="background">
            <div className="db_home_slider wow flipInY" data-wow-iteration="10">
               <figcaption>
                  <Tilt className="tg-bannercontent wow zoomInUp" options={{max: 25}}>
                     <div className="db_banner_contant">
                        <div className="db_face_images">
                           <div className="circle-ripple"/>
                           <img src = {logo} className= "img-fluid"  alt= "" />
                        </div>
                        <div className="db_banner_text">
                           <h1>Mitchell</h1>
                           <h2>Web / App Developer</h2>
                        </div>
                        <ul className="social">
                           <li><a href="https://www.linkedin.com/in/mitchell-nooitgedacht-008942183/"> <FontAwesomeIcon icon={faLinkedin} /></a></li>
                           <li><a href="https://github.com/Mitch1996"> <FontAwesomeIcon icon={faGithub} /> </a></li>
                        </ul>
                     </div>
                  </Tilt>
               </figcaption>
            </div>
         </div>
      );
   }
}
