import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { BellFill, Briefcase, ChatDots, Grid3x3Gap, HouseAddFill, PeopleFill, PersonCircle, Search } from 'react-bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.min.css'

function Navbarl() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='d-flex align-items-center'>
        <Navbar.Brand href="#home"><img src="assets/174857.png" alt="" width="40" height="40" /></Navbar.Brand>
        <Search className='d-inline d-lg-none'/>

        <Form className="d-flex d-none d-lg-inline">
            <Form.Control
            
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
          </Form>
        <Nav className="me-auto mx-3">
         <Row className='align-items-center'>
            <Col >
              <Nav.Link href="#features"> <HouseAddFill /> </Nav.Link>
              <span className='d-none d-md-inline'>Home</span>
            </Col>
            <Col >
              <Nav.Link href="#pricing"> <PeopleFill /> </Nav.Link>
              <span className='d-none d-md-inline'>Rete</span>
            </Col>
            <Col >
              <Nav.Link href="#pricing"> <Briefcase /> </Nav.Link>
              <span className='d-none d-md-inline'>Lavoro</span>
            </Col>
            <Col >
              <Nav.Link href="#pricing"> <ChatDots /> </Nav.Link>
              <span className='d-none d-md-inline'>Messaggistica</span>
            </Col>
            <Col >
              <Nav.Link href="#pricing"> <BellFill /> </Nav.Link>
              <span className='d-none d-md-inline'>Notifiche</span>
            </Col>
            <Col >
              <Nav.Link href="#pricing"> <PersonCircle /> </Nav.Link>
              <span className='d-none d-md-inline'>Tu</span>
            </Col>
         <Col>
            
            <Nav.Link href="#pricing"> <Grid3x3Gap/> </Nav.Link>
            <span className='d-none d-md-inline text-nowrap'>Per le aziende</span>
        </Col>
      </Row>
          </Nav>
          
       
       
      </Container>
    </Navbar>
  );
}

export default Navbarl;