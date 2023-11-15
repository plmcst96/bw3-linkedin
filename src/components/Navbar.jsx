import Container from 'react-bootstrap/Container';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../navbar.css"
import { useDebugValue, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

import { BellFill, Briefcase, Bullseye, ChatDots, Compass, GraphUp, Grid3x3Gap, HouseAddFill,  PeopleFill, PersonCheckFill, PersonCircle, Search, X, XDiamond, Youtube } from 'react-bootstrap-icons';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, NavLink } from 'react-router-dom';

function Navbarl() {
  const [searchUs,setsearchUs]=useState("")
  const [UserData,setUserData]=useState([])
  const [showPerLeAziende, setShowPerLeAziende] = useState(false);

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
    <ListGroup className='position-relative' >
        <Form className="d-flex d-none d-lg-inline position-relative"onSubmit={e => e.preventDefault()}  >
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
          <div className='position-absolute w-100  '>
          {UserData
            .filter((user) => user.name.toLowerCase().includes(searchUs.toLowerCase()) ||  user.surname.toLowerCase().includes(searchUs.toLowerCase()) )
            .slice(0, 10)
            .map((user, i) => (
              <ListGroupItem
                key={i}
                className={`  ${!searchUs ? "d-none" : "d-block"}`}
              >
                <Link className='nav-link d-flex justify-content-between'>
                  
                  <div className=" p-1 w-100 d-flex align-items-center">
                    <Search className='me-3'/> 
                    <p style={{fontSize:"1rem"}} className='flex-grow-1 mb-0 ms-1 text-truncate text-start'>
                      
                      {searchUs ? user.name : ""} {searchUs ? user.surname : ""}<br />
                      <strong> @{searchUs ? user.username : ""} </strong> </p>
                    <img className='ms-1' src={user.image} alt="user" width="25px" height="25px"/>
                  </div>
                </Link>
              </ListGroupItem>
            ))
            }
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
            
            <Nav.Link href="#pricing " onClick={() => setShowPerLeAziende(!showPerLeAziende)}>
               <Grid3x3Gap/> <br />
            <span className='d-none d-md-inline text-nowrap'>Per le aziende</span></Nav.Link>
            {showPerLeAziende && (
            <div style={{position:"absolute", right:"0vw", width:"20vw",height:"90vh", border:"1px black"}}
            className={` per-le-aziende-content ${ showPerLeAziende ? "play-animation" : ""  }`} >
                <div className='rounded, z-3' style={{backgroundColor:"white",border:"2px solid black", height:"100%"}} >
                <div className='d-flex justify-content-between m-3 align-items-center'>
                  <h2>Per le aziende</h2>
                  <X fontSize={"2rem"} cursor={"pointer"} onClick={() => setShowPerLeAziende(!showPerLeAziende)} />
                </div>
                <div className='m-4 border border-3 rounded '>
                <h4 className='m-2'>Scopri altri prodoti di LinkedIn</h4>
                <hr />
                <div className='d-flex flex-wrap p-2'>
                 <NavLink className="m-2 text-decoration-none" > <Youtube className=' fs-4' style={{color:"#0e76a8"}}/> <br />
                 <p className='m-0 ' style={{fontSize:"0.8rem"}}>Learning</p>
                 </NavLink>
                 <NavLink className="m-2 text-decoration-none" > <GraphUp className=' fs-4' style={{color:"#0e76a8"}}/> <br />
                 <p className='m-0 ' style={{fontSize:"0.8rem"}}>Talent <br />insight</p>
                 </NavLink>
                 <NavLink className="m-2 text-decoration-none" > <Briefcase className=' fs-4' style={{color:"#0e76a8"}}/> <br />
                 <p className='m-0 ' style={{fontSize:"0.8rem"}}>Pubblica <br /> un'offerta di <br />lavoro</p>
                 </NavLink>
                 <NavLink className="m-2 text-decoration-none" > <Bullseye className=' fs-4' style={{color:"#0e76a8"}}/> <br />
                 <p className='m-0 ' style={{fontSize:"0.8rem"}}>Pubblicizza</p>
                 </NavLink>
                 <NavLink className="m-2 text-decoration-none" > <Compass className=' fs-4' style={{color:"#0e76a8"}}/> <br />
                 <p className='m-0 ' style={{fontSize:"0.8rem"}}>Trova lead</p>
                 </NavLink>
                 <NavLink className="m-2 text-decoration-none" > <PeopleFill className=' fs-4' style={{color:"#0e76a8"}}/> <br />
                 <p className='m-0 ' style={{fontSize:"0.8rem"}}>Gruppi</p>
                 </NavLink>
                 <NavLink className="m-2 text-decoration-none" > <PersonCheckFill className=' fs-4' style={{color:"#0e76a8"}}/> <br />
                 <p className='m-0 ' style={{fontSize:"0.8rem"}}>Marketplace <br />dei servizi</p>
                 </NavLink>
                </div>
                </div>
                <div className='m-4 border border-3 rounded '>
                <h4 className='m-2'>Scopri altro per il business</h4>
                <hr />
                <div className='p-3'>
                  <NavLink style={{color:"black"}} className="text-start  text-decoration-none" >
                    <h5 className='m-0'>Assumi su linkedIn</h5>
                    <p className='mb-3'>Trova, attrai e assumi</p>
                  </NavLink>
                  <NavLink style={{color:"black"}} className="text-start  text-decoration-none" >
                    <h5 className='m-0'>Assumi su linkedIn</h5>
                    <p className='mb-3'>Trova, attrai e assumi</p>
                  </NavLink>
                  <NavLink style={{color:"black"}} className="text-start  text-decoration-none" >
                    <h5 className='m-0'>Assumi su linkedIn</h5>
                    <p className='mb-3'>Trova, attrai e assumi</p>
                  </NavLink>
                  <NavLink style={{color:"black"}} className="text-start  text-decoration-none" >
                    <h5 className='m-0'>Assumi su linkedIn</h5>
                    <p className='mb-3'>Trova, attrai e assumi</p>
                  </NavLink>
                  <NavLink style={{color:"black"}} className="text-start  text-decoration-none" >
                    <h5 className='m-0'>Assumi su linkedIn</h5>
                    <p className='mb-3'>Trova, attrai e assumi</p>
                  </NavLink>
                </div>
                </div>



                </div>

            </div>
          )}
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