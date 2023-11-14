import { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { Plus } from 'react-bootstrap-icons'

const ModaleExperiences = ({ onHide, show, experience, id }) => {
  const [isChecked, setChecked] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [postExperience, setPostExperience] = useState({
    ...experience,
    role: experience.role,
    company: experience.company,
    startDate: experience.startDate,
    endDate: experience.endDate,
    description: experience.description,
    area: experience.area,
  })

  console.log(experience)
  console.log(id)

  const handelCheckChange = () => {
    setIsValid(!isValid)
  }

  const handleSwitchChange = () => {
    setChecked(!isChecked)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setPostExperience((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const key =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZjdmM2M1NWU3ZTAwMThmODNjMTIiLCJpYXQiOjE2OTk4NzA3MDcsImV4cCI6MTcwMTA4MDMwN30.fNI0BhmrkJkjQ9j41viB-72QO6SMnWnlwEGIyAqz3Ws'

  const postExperiences = async () => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          method: 'POST',
          body: JSON.stringify(postExperience),
          headers: {
            Authorization: key,
            'Content-Type': 'application/json',
          },
        }
      )

      if (res.ok) {
        const data = await res.json()
        console.log(data)
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }

  return (
    <Modal
      show={show}
      {...onHide}
      size="lg"
      aria-labelledby="contained-modal-title-center"
      centered
      scrollable={true}
    >
      <Modal.Header closeButton onClick={onHide}>
        <Modal.Title id="contained-modal-title-center">
          Aggiungi esperienza
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div
          className="d-flex align-items-center p-3"
          style={{ background: '#EDF3F8' }}
        >
          <div>
            <p className="fw-bold mb-0">Informa la rete</p>
            <p style={{ fontSize: '15px' }}>
              Attiva l’opzione per informare la tua rete delle principali
              modifiche al profilo (ad esempio un nuovo lavoro) e degli
              anniversari lavorativi. Gli aggiornamenti possono richiedere fino
              a 2 ore. Scopri di più sulla{' '}
              <strong className="text-primary">
                {' '}
                condivisione delle modifiche del profilo
              </strong>
              .
            </p>
          </div>
          <div className="ms-3">
            {' '}
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              className="fs-2"
              label={isChecked ? 'si' : 'no'}
              onChange={handleSwitchChange}
              checked={isChecked}
            />
          </div>
        </div>
        <div className="p-3">
          <span style={{ fontSize: '12px' }} className="text-black-50">
            *indica che è obbligatorio
          </span>
          <Form>
            <Form.Group className="my-3 " controlId="formGroupEmail">
              <Form.Label>Qualifica*</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                placerholer="Esempio: Front-End Developer"
                required
                name="role"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Tipo di impego</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Seleziona</option>
                <option>A tempo pieno</option>
                <option>Part-time</option>
                <option>Autonomo</option>
                <option>Freelance</option>
                <option>A contratto</option>
                <option>Stage</option>
                <option>Apprendistato</option>
                <option>Stagionale</option>
              </Form.Select>
            </Form.Group>
            <p>
              Scopri di più sui{' '}
              <strong className="text-primary">tipi di impiego</strong>.
            </p>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Nome azienda*</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                placeholder="Epicode"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Località</Form.Label>
              <Form.Control
                type="text"
                size="sm"
                placeholder="Esempio: Roma, Italia"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Tipo di Località</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Seleziona</option>
                <option>In sede</option>
                <option>Ibrida</option>
                <option>Da remoto</option>
              </Form.Select>
              <Form.Text>Scegli un tipo di località (es. da remoto)</Form.Text>
            </Form.Group>
            <div className="d-flex align-items-center mt-4">
              <Form.Check
                name="group1"
                className="fs-3"
                onChange={handelCheckChange}
                checked={isValid}
              />
              <span className="ms-2">Attualmente ricopro questo ruolo</span>
            </div>
            <Row>
              <span style={{ fontSize: '14px' }} className="text-black-50 mb-1">
                Data di inizio*
              </span>
              <Col>
                <Form.Select required aria-label="Default select example">
                  <option>Mese</option>
                  <option>Gennaio</option>
                  <option>Febbraio</option>
                  <option>Marzo</option>
                  <option>Aprile</option>
                  <option>Maggio</option>
                  <option>Giugno</option>
                  <option>Luglio</option>
                  <option>Agosto</option>
                  <option>Settembre</option>
                  <option>Ottobre</option>
                  <option>Novembre</option>
                  <option>Dicembre</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select required aria-label="Default select example">
                  <option>Anno</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                </Form.Select>
              </Col>
            </Row>

            <Row>
              <span
                style={{ fontSize: '14px' }}
                className="text-black-50 mb-1 mt-4"
              >
                Data di fine*
              </span>
              <Col>
                <Form.Select
                  required
                  disabled={isValid}
                  aria-label="Default select example"
                >
                  <option>Mese</option>
                  <option>Gennaio</option>
                  <option>Febbraio</option>
                  <option>Marzo</option>
                  <option>Aprile</option>
                  <option>Maggio</option>
                  <option>Giugno</option>
                  <option>Luglio</option>
                  <option>Agosto</option>
                  <option>Settembre</option>
                  <option>Ottobre</option>
                  <option>Novembre</option>
                  <option>Dicembre</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select
                  required
                  disabled={isValid}
                  aria-label="Default select example"
                >
                  <option>Anno</option>
                  <option>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                </Form.Select>
              </Col>
            </Row>
            <div className={isValid ? 'd-none' : 'd-block'}>
              <div className="d-flex align-items-center mt-4">
                <Form.Check name="group2" className="fs-3" />
                <span className="ms-2">
                  Termina la pausa lavorativa adesso - Sviluppo professionale
                </span>
              </div>
              <Form.Group className="mb-1 mt-3" controlId="formGroupPassword">
                <Form.Label>Settore*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Sviluppo web"
                  size="sm"
                  disabled
                  className="bg-white"
                />
              </Form.Group>
              <Form.Text>
                LinkedIn utilizza le informazioni sul settore per fornire
                segnalazioni più pertinenti
              </Form.Text>
              <p className="mt-1">
                Scopri di più sulle{' '}
                <a
                  href="https://www.linkedin.com/help/linkedin/answer/a720019"
                  style={{ textDecoration: 'none' }}
                >
                  <strong>opzioni relative al settore</strong>
                </a>
              </p>
            </div>
            <Form.Group
              className="mb-3 mt-4"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descrizione</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <div className={isValid ? `d-none` : `d-block`}>
              <Form.Group className="mb-1 mt-3" controlId="formGroupPassword">
                <Form.Label>Sommario del profilo</Form.Label>
                <Form.Control
                  type="text"
                  size="sm"
                  defaultValue="Front-End Developer"
                />
              </Form.Group>
              <Form.Text>
                Compare sotto il tuo nome nella parte superiore del profilo
              </Form.Text>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold">Competenze</h5>
              <p>
                Ti consigliamo di aggiungere le 5 competenze più utilizzate in
                questo ruolo. Appariranno anche nella sezione Competenze.
              </p>
              <Button
                className="rounded-pill fw-bold"
                variant="outline-primary fw-bold"
              >
                <Plus className="fs-4 fw-bold" /> Aggiungi competenza
              </Button>
            </div>
            <div className="mt-4">
              <h5 className="fw-bold">Meida</h5>
              <p>
                Aggiungi contenuti multimediali come immagini, documenti, siti o
                presentazioni. Scopri di più sui{' '}
                <strong className="text-primary">
                  tipi di file multimediali supportati
                </strong>
              </p>
              <Button
                className="rounded-pill fw-bold"
                variant="outline-primary fw-bold"
              >
                <Plus className="fs-4 fw-bold" /> Aggiungi media
              </Button>
            </div>
          </Form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="rounded-pill px-4" onClick={() => postExperiences()}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModaleExperiences
