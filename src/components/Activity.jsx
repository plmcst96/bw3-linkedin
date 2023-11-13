import { Button, Col, Row } from 'react-bootstrap'
import { ArrowRight, PencilFill } from 'react-bootstrap-icons'

const Activity = () => {
  return (
    <Row>
      <Col xs={12} sm={11} md={8} className="rounded border mt-3 px-3 pt-4">
        <Row className="h-100 justify-content-between">
          <Col className="text-nowrap">
            <h5 className="fw-bold mb-0">Attività</h5>
            <span className="text-primary">14 follower</span>
            <p className="fw-bold mb-0 mt-3">Non hai ancora pubblicato nulla</p>
            <span>I post che condividi appariranno qui</span>
          </Col>
          <Col
            className="mt-3 d-flex justify-content-end me-2"
            style={{ height: '30%' }}
          >
            <Button variant="outline-primary rounded-pill">Crea un post</Button>
            <span className="ms-4">
              <PencilFill className="fs-5 " />
            </span>
          </Col>
          <Button
            className="bg-white fw-bold text-secondary rounded-0 mt-2"
            style={{ border: 'none', borderTop: 'solid 1px lightgrey' }}
          >
            Mostra tutte le attività <ArrowRight />
          </Button>
        </Row>
      </Col>
    </Row>
  )
}

export default Activity
