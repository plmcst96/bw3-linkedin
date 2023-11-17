import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Form, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Briefcase, BuildingAdd, Check, ListCheck } from 'react-bootstrap-icons'
import { Link, useParams } from 'react-router-dom'
import "../job.css"


const Jobs = () => {
    const [jobsData, setJobsData] = useState([])
    const [searchUs, setsearchUs] = useState('')
    const params = useParams()
    useEffect(() => {
        fetch(`https://strive-benchmark.herokuapp.com/api/jobs?search=${searchUs}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`err`)
            }
            return response.json()
          })
          .then((data1) => {setJobsData(data1); console.log(data1);})
          .catch((error) => console.error(error))
      }, [searchUs])
      if (jobsData.data && jobsData.data.length > 1) {
        console.log(jobsData.data[1]);
      }
return ( <>
     <div className='container-fluid p-1 p-md-5'>
  <Form
    className="d-flex flex-column align-items-center"
    onSubmit={(e) => e.preventDefault()}
  >
    <Form.Control
      type="search"
      placeholder="Search jobs"
      className="me-2 mb-4"
      aria-label="Search"
      value={searchUs}
      onChange={(e) => setsearchUs(e.target.value)}
      style={{ width: '100%' }}
    />

    <Row className='g-2'>
      {jobsData.data &&
        jobsData.data
          .filter((job) => {
            return (
              job.title.toLowerCase().includes(searchUs.toLowerCase()) ||
              job.category.toLowerCase().includes(searchUs.toLowerCase())||
              job.company_name.toLowerCase().includes(searchUs.toLowerCase())
              
            );
          })
          .slice(0, 100)
          .map((job, i) => (
            <Col
              key={i}
              className={`col-12 col-md-4 col-lg-3 ${searchUs ? 'd-block' : 'd-none'}`}
            >
         <Card id='card' className='h-100' >
          <Card.Body className='d-flex justify-content-between flex-column'>
           <Card.Title>{searchUs ? job.title : ''}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{searchUs ? job.category : ''}</Card.Subtitle>
            <div className='d-flex align-items-center justify-content-between'> 
                 <div> <Card.Text>
              {searchUs ? job.candidate_required_location : ''}
            </Card.Text>
            <Card.Text><span className='' style={{fontSize:"12px"}}>Published at:</span> <br />
              {searchUs ? job.publication_date.substring(0, 10) : ''}
            </Card.Text>
            </div>
            <div className='d-flex flex-column'>
            <button 
         className="btn addJob rounded-pill text-nowrap text-truncate mb-1 "
          style={{ fontSize: "16px",height:"40px", maxWidth:"143px"}}
        >
          <BuildingAdd className=" pb-1" />Apri annuncio
        </button>
        <Link to={`/Company/${job.company_name}`} ><button 
          className="btn addJob rounded-pill text-nowrap text-truncate  "
          style={{ fontSize: "16px",height:"40px", maxWidth:"143px"}}
        >
          <Briefcase className=" pb-1" />
         {job.company_name}
        </button></Link>
        </div>
        </div> 
       </Card.Body>
         </Card>
            </Col>
          ))}
    </Row>
  </Form>
</div>

</>)
}
export default Jobs