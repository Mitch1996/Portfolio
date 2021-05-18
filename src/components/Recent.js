import React from "react";
import WOW from 'wowjs'
import {Container, Row, Col, Card} from "react-bootstrap";
import pic1 from '../assets/vondel.jpg'
import pic2 from '../assets/stamp.png'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import recent from '../assets/download.png';
import {faSearch} from "@fortawesome/free-solid-svg-icons";


export default class Recent extends React.Component {

   componentDidMount() {
      const WOW = require('wowjs');

      window.wow = new WOW.WOW({
         live: false
      });

      window.wow.init();
   }
   render() {
      return (
         <div id = "portfolio" className="db_section_top db_portfolio_section">
            <div className="db_section_top_gap section_bg">
               <Container>
                  <div className="db_section_title wow fadeInUp"><img className="img-fluid db_section_img" src={recent} alt=""/>
                     <h2>Recente Portfolio</h2>
                  </div>
                  <Row>
                     <Col lg = {12}>
                        <div className="tab-content" id="pills-tabContent">
                           <div className="tab-pane fade show active" id="showall" role="tabpanel" aria-labelledby="showall-tab">
                              <Row className="justify-content-center">
                                 <Col lg = {"auto"} md={6} sm={8}>
                                    <div className="Portfolio">
                                       <Card style={{ width: '20rem' }}>
                                          <Card.Img src={pic1} />
                                          <figcaption className="fig-caption"><FontAwesomeIcon icon={faSearch} />
                                             <h5 className="title">Website Front - End</h5>
                                             <span className="sub-title">VondelGym</span> <a className="gallery" href="https://vondelgym.nl/"/>
                                          </figcaption>
                                       </Card>
                                    </div>
                                 </Col>
                                 <Col lg = {"auto"} md = {6} sm={8}>
                                    <div className="Portfolio">
                                       <Card style={{ width: '20rem' }}>
                                          <Card.Img src={pic2} />
                                          <figcaption className="fig-caption"><FontAwesomeIcon icon={faSearch} />
                                             <h5 className="title">Website Front - End</h5>
                                             <span className="sub-title">StampWallet</span> <a className="gallery" href="https://customerloyaltyapp.com/"/>
                                          </figcaption>
                                       </Card>
                                    </div>
                                 </Col>
                                 <Col lg = {"auto"} md = {6} sm={8}>
                                    <div className="Portfolio">
                                       <Card style={{ width: '20rem' }}>
                                          <Card.Img src={pic2} />
                                          <figcaption className="fig-caption"><FontAwesomeIcon icon={faSearch} />
                                             <h5 className="title">Website Front - End</h5>
                                             <span className="sub-title">StampWallet</span> <a className="gallery" href="https://customerloyaltyapp.com/"/>
                                          </figcaption>
                                       </Card>
                                    </div>
                                 </Col>
                              </Row>
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
      );
   }
}
