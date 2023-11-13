import { Button, Modal } from 'react-bootstrap'

const ModaleUserPut = ({ onHide }) => {
  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-center" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-center">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModaleUserPut
