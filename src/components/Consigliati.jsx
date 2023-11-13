import { Col, ProgressBar, Row } from "react-bootstrap"
import { EyeFill } from "react-bootstrap-icons"
import img from "../assets/Screenshot 2023-11-13 alle 20.41.26.png"

const Consigliati = () => {
  return (
    <Row style={{ maxHeight: "411px", minHeight: "370px" }}>
      <Col xs={12} sm={11} md={8} className="rounded border mt-3 px-3 py-4">
        <Row className="flex-column h-100">
          <Col>
            <h5 className="fw-bold">Consigliato per te</h5>
            <EyeFill className="text-black-50" />
            <span className="text-black-50 ms-2">Solo per te</span>
          </Col>
          <Col className="mt-3">
            <span className="fw-bold">Intermedio</span>
            <div className="d-flex align-items-center">
              <ProgressBar now={80} style={{ height: "8px", width: "95%" }} />{" "}
              <span className="ms-2">6/7</span>
            </div>
            <span style={{ fontSize: "14px" }}>
              Completa 1 passaggio per raggiungere il livello{" "}
              <strong className="text-primary">Massimo</strong>
            </span>
          </Col>
          <Col
            className="rounded border mt-3 p-2 h-100 m-auto"
            style={{ width: "95%" }}
          >
            <Row className="align-items-center">
              <Col xs={1}>
                <img
                  src={img}
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                />
              </Col>
              <Col className="ms-2">
                <span className="fw-bold">
                  Scrivi un riepilogo per mettere in evidenza la tua personalità
                  o la tua esperienza lavorativa
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Consigliati
