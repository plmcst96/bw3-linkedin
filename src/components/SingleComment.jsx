import { Col, Dropdown, ListGroupItem, Row } from 'react-bootstrap'
import { ThreeDots, Trash3Fill } from 'react-bootstrap-icons'
import { useDispatch, useSelector } from 'react-redux'
import { deleteComments, getComments } from '../redux/action'
import moment from 'moment'
import img from '../assets/user-avatar.webp'

const SingleComment = ({ comment }) => {
  const posts = useSelector((state) => state.post.post)
  const dispatch = useDispatch()
  // console.log('porco di', id)
  const post = posts.find((post) => post._id === comment.elementId)
  const me = useSelector((state) => state.user.userMe)

  const user = 'andreadipre@gmail.com'

  const postDate = moment(comment.createdAt)
  const timeAgo = postDate.fromNow()
  return (
    <>
      {post ? (
        <div className="d-flex">
          <img
            src={comment.author === user ? me.image : img}
            alt="user"
            className="rounded-circle me-1"
            style={{ width: '50px', height: '50px' }}
          />
          <ListGroupItem className="w-100 singleComment my-2 rounded-0 border-0 rounded-bottom rounded-top-end">
            <Row>
              <div className="d-flex justify-content-between align-items-start">
                <span className="fw-bold">
                  {comment.author === user
                    ? `${me.name} ${me.surname}`
                    : comment.author.split('@')[0]}
                </span>
                <span className="text-black-50 d-flex align-items-center">
                  {timeAgo}{' '}
                  <Dropdown align="end" className="">
                    <Dropdown.Toggle
                      id="dropdownMenuicon"
                      className="singleComment py-0"
                    >
                      <ThreeDots className="text-black-50" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="end">
                      <Dropdown.Item href="#/action-1">
                        {comment.author === user ? (
                          <>
                            <span
                              onClick={() => {
                                dispatch(deleteComments(comment._id))
                              }}
                            >
                              <Trash3Fill style={{ cursor: 'pointer' }} />
                              {' Elimina commento'}
                            </span>
                          </>
                        ) : (
                          'Salva commento'
                        )}
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </span>
              </div>
            </Row>
            <Row className="mt-4">
              <Col>
                <p> {comment.comment}</p>
              </Col>
              <Col className="text-end"></Col>
            </Row>
          </ListGroupItem>
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export default SingleComment
