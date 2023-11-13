import { Button, Col, Container, Row } from 'react-bootstrap'
import { PenFill, Pencil, PencilFill } from 'react-bootstrap-icons'

const User = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} sm={11} md={8} className="border">
          <Row className="flex-column" style={{ height: '412px' }}>
            <Col
              style={{ minHeight: '201px', maxHeight: '201px' }}
              className="bg-dark rounded-top"
            >
              <img src="" alt="" />
            </Col>
            <Col className="h-100 rounded-bottom border">
              <Row className="position-relative h-100">
                <Col xs={12}>
                  <div
                    style={{
                      width: '160px',
                      height: '160px',
                      top: '-60%',
                      borderRadius: '50%',
                    }}
                    className="position-absolute bg-white"
                  >
                    <img
                      src="https://placekitten.com/150"
                      alt=""
                      style={{
                        position: 'absolute',
                        top: '3.5%',
                        left: '3%',
                        borderRadius: '50%',
                      }}
                    />
                  </div>
                  <div className="text-end me-5 fs-5">
                    <Pencil style={{ cursor: 'pointer' }} />
                  </div>
                </Col>
                <Col>
                  <div className="fw-bold fs-3">Catalin Darii</div>
                  <div className="fs-5">Studente diplomato presso: </div>
                  <div className="text-muted">Spoleto, Umbria, Italia</div>
                </Col>
                <Col></Col>
                <Col xs={12}>
                  <Button className="btn rounded-pill fw-bold">
                    Disponibile per
                  </Button>
                  <Button className="btn mx-3 rounded-pill fw-bold bg-white text-primary">
                    Aggiungi sezione del profilo
                  </Button>
                  <Button className="btn rounded-pill fw-bold bg-white btn-outline-secondary text-muted">
                    Altro
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default User
