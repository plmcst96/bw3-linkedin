import { Col, Row } from 'react-bootstrap'
import img from '../assets/epicodeschool_logo.jpeg'

const Interessi = () => {
  return (
    <Col className="rounded border mt-3 px-3 py-4">
      <Row className="h-100 justify-content-between flex-column">
        <Col className="text-nowrap">
          <h5 className="fw-bold mb-0">Interessi</h5>
          <div className="text-black-50 text-primary my-3 pb-3 border-bottom">
            Aziende
          </div>
          <Row>
            <Col xs={3}>
              <Row>
                <Col>
                  <img
                    src={img}
                    alt=""
                    style={{
                      height: '50px',
                      width: '50px',
                      borderRadius: '50%',
                    }}
                  />
                </Col>

                <Col>
                  <div className="fw-bold">EPICODE</div>
                  <div>11.935 follower</div>
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <Row>
                <Col>
                  <img
                    src={img}
                    alt=""
                    style={{
                      height: '50px',
                      width: '50px',
                      borderRadius: '50%',
                    }}
                  />
                </Col>

                <Col>
                  <div className="fw-bold">EPICODE</div>
                  <div>11.935 follower</div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  )
}

export default Interessi
