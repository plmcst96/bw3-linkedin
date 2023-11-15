import Container from 'react-bootstrap/Container';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useDebugValue, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import { BellFill, Briefcase, ChatDots, Grid3x3Gap, HouseAddFill,  PeopleFill, PersonCircle, Search } from 'react-bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

function Navbarl() {
  const [searchUs,setsearchUs]=useState("")
  const [UserData,setUserData]=useState([])

  const Searchlist=()=>
  {
      
       fetch("https://striveschool-api.herokuapp.com/api/profile/", {
            headers: {
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzNTc0NWRkOTllZjAwMTlhMDkzM2UiLCJpYXQiOjE2OTk5NjA2NDUsImV4cCI6MTcwMTE3MDI0NX0.KD8qWCSi2X4Z56xRN9trMclgqG_Gifdc9M7JX20dqqQ",
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(`err`);
              }
              return response.json();
            })
            .then((data) => setUserData(data))
            .catch((error) => console.error( error));
            
            
  }  
  useEffect (() => {
    Searchlist()
  },[searchUs]
  )

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary position-sticky  top-0 z-3 "style={{maxHeight:"50px"}} >
      <Container className='d-flex align-items-center'>
        <Navbar.Brand href="#home"><img src="assets/174857.png" alt="" width="40" height="40" /></Navbar.Brand>
        <Search className='d-inline d-lg-none'/>
    <ListGroup className='position-relative'>
        <Form className="d-flex d-none d-lg-inline position-relative"onSubmit={e => e.preventDefault()} >
            <Form.Control
            
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchUs}
              onChange={(e)=>
                {
                  setsearchUs(e.target.value)
                 
                }}
            />
          <div className='position-absolute w-100 '>  
          {UserData
            .filter((user) => user.name.toLowerCase().includes(searchUs.toLowerCase()))
            .map((user, i) => (
              <ListGroupItem
                key={i}
                className={`  ${!searchUs ? "d-none" : "d-block"}`}
               
              >
                <Link className='nav-link d-flex justify-content-between'>
                  <div className="ps-2 w-100 d-flex align-items-center">
                    <img src={user.image} alt="user" width="25px" height="25px"/>
                    <p className='mb-0 ms-1 text-truncate'>{searchUs ? user.name : ""} {searchUs ? user.surname : ""}</p>
                  </div>
                </Link>
              </ListGroupItem>
            ))}
          </div>
          </Form>
        </ListGroup>
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