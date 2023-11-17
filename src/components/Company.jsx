import { useEffect, useState } from "react"
import { Button, Card, Col, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"

const Company = () => {
    const params = useParams()
    const [company, setCompany] = useState([])
    const getCompany = async () => {
        try {
            const res = await fetch ("https://strive-benchmark.herokuapp.com/api/jobs?company=" + params.companyId)
                if (res.ok) {const data = await res.json(); console.log(data.data); setCompany(data.data)}
                else {throw new Error("manca")}
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {getCompany()},[])
    return <Row className="p-3"> 
    {company.map((tree) =>(
        <Col className="col-11 col-md-4" >
            <a className="text-decoration-none" href={tree.url} >
         <Card className="text-center" key={tree._id}>
         <Card.Header >{tree.title}</Card.Header>
         <Card.Body>
           <Card.Title>{tree.company_name}</Card.Title>
           <Card.Text>
            {tree.category}
           </Card.Text>

         </Card.Body>
         <Card.Footer className="text-muted" > Published at:&nbsp;
             {tree.publication_date.substring(0, 10)}</Card.Footer>
       </Card></a>
       </Col>
    )
    )}
    </Row>
} 
export default Company