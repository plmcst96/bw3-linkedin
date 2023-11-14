import { useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { InfoSquareFill, Plus } from "react-bootstrap-icons"

const ModaleExperiences = ({ onHide, show, profile }) => {
  const [isChecked, setChecked] = useState(false)

  const handleSwitchChange = () => {
    setChecked(!isChecked)
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
      <Modal.Body>
        <div className="d-flex align-items-center">
          <div>
            <p className="fw-bold mb-0">Informa la rete</p>
            <p style={{ fontSize: "15px" }}>
              Attiva l’opzione per informare la tua rete delle principali
              modifiche al profilo (ad esempio un nuovo lavoro) e degli
              anniversari lavorativi. Gli aggiornamenti possono richiedere fino
              a 2 ore. Scopri di più sulla{" "}
              <strong className="text-primary">
                {" "}
                condivisione delle modifiche del profilo
              </strong>
              .
            </p>
          </div>
          <div className="ms-3">
            {" "}
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              className="fs-2"
              label={isChecked ? "si" : "no"}
              onChange={handleSwitchChange}
              checked={isChecked}
            />
          </div>
        </div>
        <span style={{ fontSize: "12px" }} className="text-black-50">
          *indica che è obbligatorio
        </span>
        <Form>
          <Form.Group className="my-3 " controlId="formGroupEmail">
            <Form.Label>Nome*</Form.Label>
            <Form.Control type="text" size="sm" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Cognome*</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Nome aggiuntivo</Form.Label>
            <Form.Control type="text" size="sm" disabled className="bg-white" />
          </Form.Group>
          <p style={{ fontSize: "14px" }} className="text-black-50">
            Pronuncia del nome
          </p>
          <InfoSquareFill className="text-black-50" />
          <span className="ms-2 text-black-50" style={{ fontSize: "14px" }}>
            Può essere aggiunta solo usando la nostra app per dispositivi mobili
          </span>
          <Form.Group
            className="mb-3 mt-3"
            controlId="formGroupPassword"
            aria-describedby="genere"
          >
            <Form.Label>Inserisci pronomi personalizzati</Form.Label>
            <Form.Control type="text" size="sm" disabled className="bg-white" />
            <Form.Text id="genere" muted>
              Indica i pronomi di genere che vuoi che gli altri usino per
              riferirsi a te.
            </Form.Text>
          </Form.Group>
          <p>
            Scopri di più sui{" "}
            <a
              href="https://www.linkedin.com/help/linkedin/answer/a569520"
              style={{ textDecoration: "none" }}
            >
              <strong>pronomi di genere</strong>
            </a>
          </p>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Sommario*</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <h5 className="fw-bold">Posizione attuale</h5>
          <Plus className="text-primary fs-3" />
          <span className="text-primary fs-6 fw-bold">
            Aggiungi una nuova posizione lavorativa
          </span>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Settore*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Marketing"
              size="sm"
              disabled
              className="bg-white"
            />
          </Form.Group>
          <p>
            Scopri di più sulle{" "}
            <a
              href="https://www.linkedin.com/help/linkedin/answer/a720019"
              style={{ textDecoration: "none" }}
            >
              <strong>opzioni relative al settore</strong>
            </a>
          </p>
          <h5 className="fw-bold">Formazione</h5>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Formazione*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Marketing"
              size="sm"
              disabled
              className="bg-white"
            />
          </Form.Group>
          <Plus className="text-primary fs-3" />
          <span className="text-primary fs-6 fw-bold">
            Aggiungi un nuovo grado di formazione
          </span>
          <div className="d-flex align-items-center">
            <Form.Check name="group1" className="fs-3" />{" "}
            <span className="ms-2">
              Mostra la formazione nella mia presentazione
            </span>
          </div>
          <h5 className="fw-bold">Località</h5>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Paese/Area geografica*</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>CAP</Form.Label>
            <Form.Control
              type="text"
              placeholder="72014"
              size="sm"
              disabled
              className="bg-white"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Città*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cisternino"
              size="sm"
              disabled
              className="bg-white"
            />
          </Form.Group>
          <h5 className="fw-bold">Informazioni di contatto</h5>
          <p className="text-black-50 fw-bold">
            Aggiungi o modifica il tuo profilo URL, indirizzo email e altro
          </p>
          <span className="text-primary fs-6 fw-bold">
            Modifica le informazioni di contatto
          </span>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="rounded-pill px-4">Salva</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModaleExperiences
