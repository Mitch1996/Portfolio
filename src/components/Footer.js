import React from "react";
import {Container, Row , Col} from "react-bootstrap";
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component {

   render() {
      return (
         <div>
            <footer>
               <div className="footer_wapper">
                  <Container>
                     <Row>
                        <Col lg = {12}>
                           <div className="social db_common_text">
                              <ul>
                                 <li><a href="https://www.linkedin.com/in/mitchell-nooitgedacht-008942183/"> <FontAwesomeIcon icon={faLinkedin} /></a></li>
                                 <li><a href="https://github.com/Mitch1996"> <FontAwesomeIcon icon={faGithub} /> </a></li>
                              </ul>
                           </div>
                        </Col>
                        <Col lg = {12}>
                           <div className="Copyright db_common_text">© Copyright 2021 <strong>Mitchell</strong>. All
                              rights reserved.
                           </div>
                        </Col>
                     </Row>
                  </Container>
               </div>
            </footer>
         </div>
      );
   }
}

export default Footer;
