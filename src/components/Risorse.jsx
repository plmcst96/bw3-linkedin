import { Button, Col, Row } from 'react-bootstrap'
import { ArrowRight, EyeFill, PeopleFill } from 'react-bootstrap-icons'
import { GiRadarDish } from 'react-icons/gi'

const Risorse = () => {
  return (
    <Row>
      <Col xs={12} sm={11} md={8} className="rounded border mt-3 px-3 pt-4">
        <Row className="flex-column h-100">
          <Col className="d-flex flex-column">
            <h5 className="fw-bold">Risorse</h5>
            <div className="d-flex align-items-center">
              <EyeFill className="text-black-50" />
              <span className="text-black-50 ms-2">Solo per te</span>
            </div>

            <div className="d-flex mt-2 mb-3">
              <GiRadarDish className="fs-5 mb-2 me-2" />
              <div>
                <div className="fw-bold ">
                  Modalità creazione di contenuti
                  <span
                    className="rounded rounded-2 px-2 ms-2"
                    style={{ background: 'lightgrey' }}
                  >
                    No
                  </span>
                </div>
                <div>
                  Fatti scoprire, metti in risalto i contenuti sul tuo profilo e
                  accedi agli strumenti di creazione
                </div>
              </div>
            </div>
            <div className="d-flex">
              <PeopleFill className="fs-5 mb-2 me-2" />
              <div>
                <div className="fw-bold">La mia rete</div>
                <div>Salva e gestisci i tuoi collegamenti e interessi.</div>
              </div>
            </div>
          </Col>
          <Button
            className="bg-white fw-bold text-secondary rounded-0 mt-2"
            style={{ border: 'none', borderTop: 'solid 1px lightgrey' }}
          >
            Mostra tutte le risorse (5) <ArrowRight />
          </Button>
        </Row>
      </Col>
    </Row>
  )
}

export default Risorse
