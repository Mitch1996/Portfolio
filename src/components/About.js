import React, {createRef, Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import about from '../assets/about3.png'
import {
   faFootballBall,
   faGamepad,
   faMusic,
   faPlane
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons'


export default class About extends Component {

   componentDidMount() {
      const WOW = require('wowjs');

      window.wow = new WOW.WOW({
         offset: 100,
         mobile: false,
         live: true
      });

      window.wow.init();
   }

   wrapper = createRef();

   render() {
      return (
         <div ref={this.wrapper} id="about" className="db_section_top db_about_section">
            <div className="db_section_top_gap">
               <Container>
                  <div className="db_section_title wow fadeInUp"><img className="img-fluid db_section_img" src={about}
                                                                      alt=""/><h2>Over Mij</h2>
                  </div>
                  <Row>
                     <Col lg={12}>
                        <div className="db_about_text_wapper db_common_text wow fadeIn">Mijn naam is <strong>Mitchell
                           Nooitgedacht</strong> en in de zoektocht naar een nieuwe baan ben ik vooral opzoek naar een back-end
                           functie. Een functie met doorgroeimogelijkheden en de kans om mee te werken aan diverse
                           projecten waar ik met mijn eigen ideeën kan komen. Back-end development is ook precies de
                           kant die ik op wil vanwege de vele vaardigheden die hier gecombineerd worden. Hierbij hebben
                           we het bijvoorbeeld over: Creativiteit, technische vaardigheden, problemen oplossen en het
                           analyseren van de eisen van de klant. Bovendien ben ik nauwkeurig ingesteld en sta ik altijd
                           open om nieuwe dingen bij te leren. Ik verbeter mij elke dag door online bij te blijven met
                           ontwikkeling in dit vakgebied en door in de praktijk bezig te zijn met het bouwen van
                           websites. Ik ben vertrouwd met de programmeertalen: HTML, CSS, Java , Kotlin. Naast Back-end
                           development ben ik ook bekend met programmeertalen die gebruikt worden in de Front-end
                           development. Dit zijn: Html, Css , Sass , Bootstrap , React. Als persoon ben ik sociaal
                           ingesteld en heb ik vlotte communicatievaardigheden, zowel in het Nederlands als in het
                           Engels. Daarom vind ik het belangrijk om samen te werken met gedreven collega’s en kennis te
                           delen binnen het team. In mijn CV is verdere informatie te vinden over mijn vaardigheden.
                        </div>
                     </Col>
                  </Row>
                  <Row>
                     <Col lg={6}>
                        <div className="db_small_title wow fadeInUp">Persoonlijke Details</div>
                        <ul className="db_common_text db_personal_details">
                           <li className="wow fadeInUp"><strong>Geboortedatum</strong>03-07-1996</li>
                           <li className="wow fadeInUp"><strong>Phone</strong>0624448777</li>
                           <li className="wow fadeInUp"><strong>Email</strong><a
                              href="mailto:mitchell.n@outlook.com">mitchell.n@outlook.com</a></li>
                           <li className="wow fadeInUp"><strong>Locatie</strong>Amsterdam</li>
                           <li className="wow fadeInUp"><strong>Huidige
                              Positie</strong><span>Student - TechGrounds</span>
                           </li>
                        </ul>
                     </Col>
                     <Col lg={6}>
                        <div className="db_small_title wow fadeInUp">Mijn Intresses</div>
                        <div className="db_my_interests db_common_text">
                           <ul>
                              <li className="wow fadeInUp">
                                 <p><FontAwesomeIcon icon={faGamepad}/><span>Games</span></p>
                              </li>
                              <li className="wow fadeInUp">
                                 <p><FontAwesomeIcon icon={faMusic}/><span>Muziek</span></p>
                              </li>
                              <li className="wow fadeInUp">
                                 <p><FontAwesomeIcon icon={faFootballBall}/><span>Voetbal</span></p>
                              </li>
                              <li className="wow fadeInUp">
                                 <p><FontAwesomeIcon icon={faGithub}/><span>Git</span></p>
                              </li>
                              <li className="wow fadeInUp">
                                 <p><FontAwesomeIcon icon={faPlane}/><span>Reizen</span></p>
                              </li>
                           </ul>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
      );
   }
}
