import { Button, Form, Modal } from 'react-bootstrap'
import {
  CalendarWeek,
  Clock,
  Image,
  PatchCheckFill,
  ThreeDots,
} from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { setPost } from '../redux/action'
import { useEffect, useState } from 'react'

const AddPostModal = ({ show, onHide, selectedPost }) => {
  const user = useSelector((state) => state.user.userMe)
  const dispatch = useDispatch()

  const [text, setText] = useState('')
  const handleInputChange = (e) => {
    const { value } = e.target
    setText(value)
  }
  const handlePublish = () => {
    const postData = { text }
    dispatch(setPost(onHide, postData))
  }

  useEffect(() => {
    if (selectedPost) {
      setText(selectedPost.text)
    } else {
      setText('')
    }
  }, [selectedPost])

  const key =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZjdmM2M1NWU3ZTAwMThmODNjMTIiLCJpYXQiOjE2OTk4NzA3MDcsImV4cCI6MTcwMTA4MDMwN30.fNI0BhmrkJkjQ9j41viB-72QO6SMnWnlwEGIyAqz3Ws'
  const methodToUse = 'PUT'
  const putPost = async () => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${selectedPost?._id}`,
        {
          method: methodToUse,
          body: JSON.stringify({ text }),
          headers: {
            Authorization: key,
            'Content-Type': 'application/json',
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        console.log('ccccc', data)
        onHide()
      } else {
        throw new Error('Errore nel postare articolo')
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <>
      <Modal size={'lg'} show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title
            className="fw-bold d-flex align-items-center"
            style={{ fontSize: '20px' }}
          >
            <div>
              <img
                src={user.image}
                alt="user"
                className="rounded-circle"
                style={{ width: '50px', height: '50px' }}
              />
            </div>
            <div className="ms-2">
              {user.name}
              {user.surname}
              <p className="m-0 fw-normal" style={{ fontSize: '14px' }}>
                Pubblica: Chiunque
              </p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="postform">
            <Form.Control
              className="border-0"
              as="textarea"
              rows={15}
              placeholder="Di cosa vorresti parlare?"
              autoFocus
              onChange={handleInputChange}
              defaultValue={text}
            />
          </Form.Group>
          <div className="mb-3">
            <span className="fs-5 p-3 rounded-circle post-control ">
              <Image className="mb-1" />
            </span>
            <span className="fs-5 p-3 ms-2 rounded-circle post-control ">
              <CalendarWeek className="mb-1" />
            </span>
            <span className="fs-5 p-3 ms-2 rounded-circle post-control ">
              <PatchCheckFill className="mb-1" />
            </span>
            <span className="fs-5 p-3 ms-2 rounded-circle post-control ">
              <ThreeDots className="mb-1" />
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer className="">
          <span className="fs-5 d-flex align-items-center">
            <Clock />
          </span>
          {!selectedPost ? (
            <Button
              variant="primary"
              className="rounded-pill"
              // disabled
              onClick={() => {
                handlePublish()
              }}
            >
              Pubblica
            </Button>
          ) : (
            <Button
              variant="primary"
              className="rounded-pill"
              // disabled
              onClick={() => {
                putPost()
                console.log('clickato')
              }}
            >
              Salva
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddPostModal
