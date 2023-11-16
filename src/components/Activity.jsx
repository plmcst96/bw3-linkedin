import { useEffect, useState } from 'react'
import { Button, Col, Dropdown, Row } from 'react-bootstrap'
import { ArrowRight, PencilFill, Plus, Trash3Fill } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/action'
import AddPostModal from './AddPostModal'

const Activity = () => {
  const myPosts = useSelector((state) => state.post.post)
  const myId = useSelector((state) => state.user.userMe._id)
  const [modalPostShow, setModalPostShow] = useState(false)
  const [selectedPost, setSelectedPost] = useState()

  const handleOnClick = (myPost) => {
    setSelectedPost(myPost)
    setModalPostShow(true)
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  console.log('ciaone', myPosts)
  return (
    <Row>
      <Col xs={12} sm={11} md={8} className="rounded border mt-3 px-3 pt-4">
        <Row className="h-100 justify-content-between">
          <Col className="text-nowrap">
            <h5 className="fw-bold mb-0">Attività</h5>
            <span className="text-primary">14 follower</span>
          </Col>
          <Col className="mt-3 d-flex justify-content-end me-2">
            <Button
              variant="outline-primary rounded-pill"
              onClick={() => handleOnClick()}
            >
              Crea un post
            </Button>
            <span className="ms-4">
              <PencilFill className="fs-5 " />
            </span>
          </Col>
          <Row className="flex-column">
            {myPosts
              .map((myPost) => (
                <>
                  {myId === myPost.user._id ? (
                    <Col className="mt-3 d-flex justify-content-between">
                      <div>
                        <p
                          className="m-0 text-black-50"
                          style={{ fontSize: '14px' }}
                        >
                          <span className="fw-bold">
                            {myPost.user.name
                              ? myPost.user.name
                              : myPost.username}{' '}
                            {myPost.user.surname ? myPost.user.surname : ''}
                          </span>{' '}
                          <span>ha pubblicato questo post - ora</span>
                        </p>
                        <div>
                          <p style={{ fontSize: '14px' }}>{myPost.text}</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Dropdown align="end">
                          <Dropdown.Toggle id="dropdownMenuicon">
                            <Plus className="fs-1 me-3 text-black" />
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="end">
                            <Dropdown.Item
                              href="#/action-1"
                              onClick={() => handleOnClick(myPost)}
                            >
                              <PencilFill /> Modifica post
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                              <Trash3Fill /> Elimina posta
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </Col>
                  ) : (
                    ''
                  )}
                </>
              ))
              .reverse()}
            {/* <p className="fw-bold mb-0 mt-3">Non hai ancora pubblicato nulla</p>
              <span>I post che condividi appariranno qui</span> */}
          </Row>
          <Button
            className="bg-white fw-bold text-secondary rounded-0 mt-2"
            style={{ border: 'none', borderTop: 'solid 1px lightgrey' }}
          >
            Mostra tutte le attività <ArrowRight />
          </Button>
        </Row>
      </Col>
      <AddPostModal
        show={modalPostShow}
        onHide={() => setModalPostShow(false)}
        selectedPost={selectedPost}
      />
    </Row>
  )
}

export default Activity
