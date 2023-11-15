import { Col, Row } from "react-bootstrap"
import { InfoSquareFill } from "react-bootstrap-icons"
import FooterHome from "./footerHome"

const RightSideBar = () => {
  return (
    <Col xs={12} lg={3} className="p-0 d-none d-md-block">
      <Row>
        <Col className=" border rounded pt-2 ">
          <div className="d-flex justify-content-between">
            <p className="fw-bold">LinkedIn Notizie</p>
            <InfoSquareFill />
          </div>
          <Row>
            <Col className="p-0">
              <ul>
                <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                  Assunzioni e nuovi premi in Ferrari
                  <p className="fw-light">Notizie principali | 182 lettori</p>
                </li>
                <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                  Saipem punta sull'eolico di Naval Enginering
                  <p className="fw-light">2 ore fa</p>
                </li>
                <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                  Quante barriere ci sono nella società
                  <p className="fw-light">4 ore fa</p>
                </li>
                <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                  Inclusione LGBTQ+
                  <p className="fw-light">1 giorno fa | 1.1765 lettori</p>
                </li>
                <li className="border-0 fw-bold" style={{ fontSize: "13px" }}>
                  Nuova acquisiszione per Zenga
                  <p className="fw-light">11 ore fa | 124 lettori</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <FooterHome />
      </Row>
    </Col>
  )
}

export default RightSideBar
