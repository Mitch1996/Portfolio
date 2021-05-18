import React from "react";
import {Container, Navbar, Nav} from "react-bootstrap";

class TopBar extends React.Component {

   render() {
      return (
         <div id= "home">
            <Navbar expand="lg" className="wow" variant="dark">
               <Container>
                  <Navbar.Brand href="#home">Mitch</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav justify className="ml-auto" activeKey="/home">
                        <Nav.Item>
                           <Nav.Link href="#home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link href="#about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link href="#skills">Skills</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link href="#resume">Cv</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        </Nav.Item>
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </div>
      );
   }
}

export default TopBar;
