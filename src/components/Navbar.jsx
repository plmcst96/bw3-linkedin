import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { BellFill, Briefcase, ChatDots, Grid3x3, Grid3x3Gap, HouseAddFill, PeopleFill, PersonCircle } from 'react-bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.min.css'

function Navbarl() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="assets/174857.png" alt="" width="40" height="40" /></Navbar.Brand>
        <Form className="d-flex">
            <Form.Control
            
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
          </Form>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-5">
            <Col className='mx-2'>
            <Nav.Link href="#features"> <HouseAddFill className='fs-5'/> </Nav.Link>
            <span>Home</span>
            </Col>
            <Col className='mx-2'>
            <Nav.Link href="#pricing"> <PeopleFill className='fs-5 '/> </Nav.Link>
            <span>Rete</span>
            </Col>
            <Col className='mx-2'>
            <Nav.Link href="#pricing"> <Briefcase className='fs-5 '/> </Nav.Link>
            <span>Lavoro</span>
            </Col>
            <Col className='mx-2'>
            <Nav.Link href="#pricing"> <ChatDots className='fs-5 '/> </Nav.Link>
            <span>Messaggistica</span>
            </Col>
            <Col className='mx-2'>
            <Nav.Link href="#pricing"> <BellFill className='fs-5 '/> </Nav.Link>
            <span>Notifiche</span>
            </Col>
            <Col className='mx-2'>
            <Nav.Link href="#pricing"> <PersonCircle className='fs-5 '/> </Nav.Link>
            <span>Tu</span>
            </Col>
         <Col>
         <Grid3x3Gap className='fs-5 mt-2'/>
            <NavDropdown title="Per le aziende"  id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
        </Col>
          </Nav>
          
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
  );
}

export default Navbarl;