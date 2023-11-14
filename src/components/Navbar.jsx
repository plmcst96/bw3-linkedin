import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Searchlist from './Search';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { BellFill, Briefcase, ChatDots, Grid3x3Gap, HouseAddFill, PeopleFill, PersonCircle, Search } from 'react-bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.min.css'

function Navbarl() {
  const [searchUs,setsearchUs]=useState("")


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary position-sticky  top-0 z-3 ">
      <Container className='d-flex align-items-center'>
        <Navbar.Brand href="#home"><img src="assets/174857.png" alt="" width="40" height="40" /></Navbar.Brand>
        <Search className='d-inline d-lg-none'/>

        <Form className="d-flex d-none d-lg-inline">
            <Form.Control onSubmit={(e)=>
                    {
                      e.preventDefault()
                      (Searchlist(searchUs))
                    }}
            
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchUs}
              onChange={(e)=>
                {
                  e.preventDefault()
                  setsearchUs(e.target.value)
                }}
            />
           
          </Form>
        <Nav className="me-auto mx-3">
         <Row className='align-items-center'>
            <Col >
              <Nav.Link href="#features "> <HouseAddFill /> <br />
              <span className='d-none d-md-inline'>Home</span></Nav.Link>
            </Col>
            <Col >
              <Nav.Link href="#pricing "> <PeopleFill /> <br />
              <span className='d-none d-md-inline'>Rete</span></Nav.Link>
            </Col>
            <Col >
              <Nav.Link href="#pricing "> <Briefcase /> <br />
              <span className='d-none d-md-inline'>Lavoro</span></Nav.Link>
            </Col>
            <Col >
              <Nav.Link href="#pricing "> <ChatDots /> <br />
              <span className='d-none d-md-inline'>Messaggistica</span></Nav.Link>
            </Col>
            <Col >
              <Nav.Link href="#pricing "> <BellFill /> <br />
              <span className='d-none d-md-inline'>Notifiche</span></Nav.Link>
            </Col>
            <Col >
              <Nav.Link href="#pricing "> <PersonCircle /> <br />
              <span className='d-none d-md-inline'>Tu</span></Nav.Link>
            </Col>
         <Col className='border-start'>
            
            <Nav.Link href="#pricing " > <Grid3x3Gap/> <br />
            <span className='d-none d-md-inline text-nowrap'>Per le aziende</span></Nav.Link>
        </Col>
        <Col className='d-none d-xl-block' >
            
            <Nav.Link href="#pricing " >  
            <span className='d-none d-md-inline text-nowrap text-decoration-underline'>Prova premium gratis</span></Nav.Link>
        </Col>
      </Row>
          </Nav>
          
       
       
      </Container>
    </Navbar>
  );
}

export default Navbarl;