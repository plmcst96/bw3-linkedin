import { Col, Row } from "react-bootstrap"
import { PencilFill, Plus } from "react-bootstrap-icons"
import img from "../assets/Logo_Università_Padova.svg.png"
import { useParams } from "react-router-dom"

const Student = () => {
  const params = useParams()
  return (
    <Col className="rounded border mt-3 px-3 py-4">
      <Row>
        <Col>
          <h5 className="fw-bold">Formazione</h5>
          <div>
            <img src={img} alt="" style={{ width: "50px" }} />
            <span className="fw-bold ms-3 text-nowrap">
              Università degli studi di Padova
            </span>
          </div>
        </Col>
        {params.userId ? (
          ""
        ) : (
          <Col className="d-flex justify-content-end align-items-center h-25">
            <Plus className="fs-1 me-3 " />
            <PencilFill className="fs-5 " />
          </Col>
        )}
      </Row>
    </Col>
  )
}
export default Student
