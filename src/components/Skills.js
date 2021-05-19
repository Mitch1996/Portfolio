import React from "react";
import WOW from 'wowjs'
import {Container, Row, Col} from "react-bootstrap";
import skills from '../assets/skills.png'

export default class Skills extends React.Component {

   componentDidMount() {
      const WOW = require('wowjs');

      window.wow = new WOW.WOW({
         live: false
      });

      window.wow.init();
   }

   render() {
      return (
         <div  id="skills" className="db_section_top db_skills_section">
            <div className="db_section_top_gap section_bg">
               <Container>
                  <div className="db_section_title wow fadeInUp"><img className="img-fluid db_section_img" src={skills} alt=""/>
                     <h2>Skills</h2>
                  </div>
                  <Row lg = {5} className = "justify-content-around">
                     <Col lg = {5} md = {6}>
                        <div className="db_small_title wow fadeInUp">
                           Technische vaardigheden
                        </div>
                        <div className="db_each-skills db_common_text">
                           <div className="candidatos wow fadeInUp">
                              <div className="parcial">
                                 <div className="info">
                                    <div className="nome">Html / Css</div>
                                 </div>
                                 <div className="progressBar">
                                    <div className="percentagem" style={{width : '70%'}}>
                                       <div className="percentagem-num">70%
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="candidatos wow fadeInUp">
                              <div className="parcial">
                                 <div className="info">
                                    <div className="nome">Kotlin / Java</div>
                                 </div>
                                 <div className="progressBar">
                                    <div className="percentagem" style={{width : '40%'}}>
                                       <div className="percentagem-num">40%
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="candidatos wow fadeInUp">
                              <div className="parcial">
                                 <div className="info">
                                    <div className="nome">JavaScript</div>
                                 </div>
                                 <div className="progressBar">
                                    <div className="percentagem" style={{width : '30%'}}>
                                       <div className="percentagem-num">30%
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="candidatos wow fadeInUp">
                              <div className="parcial">
                                 <div className="info">
                                    <div className="nome">React</div>
                                 </div>
                                 <div className="progressBar">
                                    <div className="percentagem" style={{width : '25%'}}>
                                       <div className="percentagem-num">25%
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="candidatos wow fadeInUp">
                              <div className="parcial">
                                 <div className="info">
                                    <div className="nome">Vue</div>
                                 </div>
                                 <div className="progressBar">
                                    <div className="percentagem" style={{width : '10%'}}>
                                       <div className="percentagem-num">10%
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Col>
                     <Col lg = {5} md = {6}>
                        <div className="db_small_title wow fadeInUp">
                           Professionele vaardigheden</div>
                        <div className="db_each-skills db_common_text">
                           <div className="candidatos wow fadeInUp">
                              <div className="parcial">
                                 <div className="info">
                                    <div className="nome">Communicatie</div>
                                 </div>
                                 <div className="progressBar">
                                    <div className="percentagem" style={{width : '80%'}}>
                                       <div className="percentagem-num">80%</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="candidatos wow fadeInUp">
                              <div className="parcial">
                                 <div className="info">
                                    <div className="nome">TeamWork</div>
                                 </div>
                                 <div className="progressBar">
                                    <div className="percentagem" style={{width : '80%'}}>
                                       <div className="percentagem-num">80%</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="candidatos wow fadeInUp">
                              <div className="parcial">
                                 <div className="info">
                                    <div className="nome">Oplossingsgericht denken</div>
                                 </div>
                                 <div className="progressBar">
                                    <div className="percentagem" style={{width : '80%'}}>
                                       <div className="percentagem-num">80%</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="candidatos wow fadeInUp">
                              <div className="parcial">
                                 <div className="info">
                                    <div className="nome">Creatief</div>
                                 </div>
                                 <div className="progressBar">
                                    <div className="percentagem" style={{width : '80%'}}>
                                       <div className="percentagem-num">80%</div>
                                    </div>
                                 </div>
                              </div>
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
