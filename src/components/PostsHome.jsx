import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  ArrowClockwise,
  ChatDots,
  HandThumbsUp,
  HandThumbsUpFill,
  Plus,
  Send,
} from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../redux/action'
import avatar from '../assets/user-avatar.webp'

const PostsHome = () => {
  const dispatch = useDispatch()

  const posts = useSelector((state) => state.post.post)

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <>
      {posts
        .map((post) => (
          <Row key={post._id} className="border rounded pt-2 mt-2 flex-column">
            <Col className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src={post.user.image ? post.user.image : avatar}
                  alt=""
                  style={{ width: '50px', height: '50px' }}
                  className="me-2"
                />
                <div>
                  <p className="m-0 fw-bold" style={{ fontSize: '14px' }}>
                    {post.user.name ? post.user.name : post.username}{' '}
                    {post.user.surname ? post.user.surname : ''}
                  </p>
                  <p className="m-0 text-black-50" style={{ fontSize: '12px' }}>
                    {(
                      Math.floor(Math.random() * (100000 - 5000 + 1)) + 5000
                    ).toLocaleString()}{' '}
                    follower
                  </p>
                  <p className="m-0 text-black-50" style={{ fontSize: '12px' }}>
                    46 minuti
                  </p>
                </div>
              </div>

              <p className="text-primary fw-bold text-start m-0">
                <span className="d-flex" style={{ cursor: 'pointer' }}>
                  <Plus className="fs-3" /> Segui
                </span>
              </p>
            </Col>
            <Col className="mt-2">
              <p style={{ fontSize: '14px', lineHeight: '1.2em' }}>
                {post.text}
              </p>
            </Col>
            <Col className="p-0">
              <img src={post.image} alt="" className="w-100" />
              <span className="ms-3 mt-2 d-flex align-items-center">
                <HandThumbsUpFill className="text-primary me-1" />{' '}
                <span style={{ fontSize: '12px' }}>10</span>
              </span>
            </Col>
            <Row className="justify-content-center w-100 m-0 px-2">
              <Col className="d-flex justify-content-evenly mt-2 border-top">
                <div className="py-1 post-interation px-2 mt-2">
                  <HandThumbsUp className="me-2" />{' '}
                  <span className="d-none d-sm-inline">Consiglia</span>
                </div>
                <div className="py-1 post-interation px-2 mt-2">
                  <ChatDots className="me-2" />
                  <span className="d-none d-sm-inline">Commenta</span>
                </div>
                <div className="py-1 post-interation px-2 mt-2">
                  <ArrowClockwise className="me-2" />
                  <span className="d-none d-sm-inline">Diffondi il post</span>
                </div>
                <div className="py-1 post-interation px-2 mt-2">
                  <Send className="me-2" />
                  <span className="d-none d-sm-inline">Invia</span>
                </div>
              </Col>
            </Row>
            <Row className="w-100 mt-2 mx-0 p-0">
              <Col
                className="py-2"
                style={{ fontSize: '14px', background: 'lightgrey' }}
              >
                Scrivi tu il primo commento
              </Col>
            </Row>
          </Row>
        ))
        .reverse()}
    </>
  )
}
export default PostsHome
