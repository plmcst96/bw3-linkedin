import { useEffect, useRef, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const ImageProfile = ({ onHide, show, profile }) => {
  const [postImage, setPostImage] = useState()
  const [showInput, setShowInput] = useState(false)
  const fileInputRef = useRef(null)
  useEffect(() => {
    if (showInput && fileInputRef.current) {
      fileInputRef.current.click()
    }
  }, [showInput])

  const postImg = async () => {
    let formData = new FormData()
    formData.append('profile', postImage)
    const key =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZjdmM2M1NWU3ZTAwMThmODNjMTIiLCJpYXQiOjE2OTk4NzA3MDcsImV4cCI6MTcwMTA4MDMwN30.fNI0BhmrkJkjQ9j41viB-72QO6SMnWnlwEGIyAqz3Ws'
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${profile._id}/picture`,
        {
          method: 'POST',
          body: formData,
          headers: {
            Authorization: key,
            Accept: 'application/json',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        setPostImage(null)
        setShowInput(false)
        onHide()
        window.location.reload()
      } else {
        throw new Error('Non puoi rubarmi identità!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }

  return (
    <Modal show={show} onHide={onHide} backdrop={onHide}>
      <Modal.Header>
        <Modal.Title>Cambia foto</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center flex-column align-items-center">
        <h5 className="fw-bold">
          {profile.name}, aiuta gli altri a conoscerti!
        </h5>
        <img
          src={profile.image}
          alt=""
          style={{ borderRadius: '50%', width: '150px', height: '150px' }}
          className="my-5"
        />
        <p style={{ fontSize: '12px' }} className="text-center">
          Chiediamo agli utenti di LinkedIn di utilizzare le loro vere identità,
          quindi scatta o carica una tua foto. Poi ritagliala, applica dei
          filtri e perfezionala come vuoi.
        </p>
        {showInput && (
          <>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={(e) => setPostImage(e.target.files[0])}
              ref={fileInputRef}
              className="visually-hidden"
            />
          </>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="outline-primary"
          className="rounded-pill "
          onClick={() => setShowInput(true)}
        >
          Scegli file
        </Button>
        <Button
          variant="primary"
          className="rounded-pill"
          onClick={() => postImg()}
        >
          Carica foto
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ImageProfile
