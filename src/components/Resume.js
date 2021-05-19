import React from "react";
import WOW from 'wowjs'
import resume from '../assets/cv.png'
import {Container, Row, Col} from "react-bootstrap";

export default class Resume extends React.Component {

   componentDidMount() {
      const WOW = require('wowjs');

      window.wow = new WOW.WOW({
         live: false
      });

      window.wow.init();
   }

   render() {
      return (
         <div id="resume" className="db_section_top db_resume_section">
            <div className="db_section_top_gap">
               <Container>
                  <div className="db_section_title wow fadeInUp"><img className="img-fluid db_section_img" src={resume} alt=""/>
                     <h2>Mijn Cv</h2>
                  </div>
                  <Row>
                     <Col lg = {6}>
                        <div className="db_small_title text-center">
                           Opleiding</div>
                        <div className="db_education_details db_common_text">
                           <div className="db_education_item dark_box_bg wow fadeInUp">
                              <h4> Vmbo T <a href="#">Tobias College</a></h4>
                              <div className="db_year">2009-2013</div>
                           </div>
                           <div className="db_education_item dark_box_bg wow fadeInUp">
                              <h4> Mbo 4 - VerpleegKunde <a href="#">Roc van Amsterdam</a></h4>
                              <div className="db_year">2014-2015</div>
                              <p> VerpleegKunde opleiding , gestopt omdat ik een andere branch in wilde. </p>
                           </div>
                           <div className="db_education_item dark_box_bg wow fadeInUp">
                              <h4> Mbo 4 - Applicatie Ontwikkelaar <a href="#">MboRijnland</a></h4>
                              <div className="db_year">2017-2020</div>
                           </div>
                        </div>
                     </Col>
                     <Col lg = {6}>
                        <div className="db_small_title text-center">
                           Werkervaring</div>
                        <div className="db_experience_details db_common_text">
                           <div className="db_experience_item dark_box_bg wow fadeInUp">
                              <h4>Kassa <a href="#">Mc - Donalds</a></h4>
                              <div className="db_year">2014-2015</div>
                              <p> Bestellingen aannemen bij de kassa </p>
                           </div>
                           <div className="db_experience_item dark_box_bg wow fadeInUp">
                              <h4>Bagage medewerker <a href="#">Schiphol</a></h4>
                              <div className="db_year">2016-2017</div>
                              <p> Bagage in het vliegtuig laden.</p>
                           </div>
                           <div className="db_experience_item dark_box_bg wow fadeInUp">
                              <h4>Web Developer <a href="#">StampWallet</a></h4>
                              <div className="db_year">2018-2020</div>
                              <ul className="db_common_text">
                                 <li>Code reviews van stagaires</li>
                                 <li>Website van PDF naar React implementeren</li>
                                 <li>Project Management</li>
                              </ul>
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
