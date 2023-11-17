import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import {
  ArrowClockwise,
  ChatDots,
  HandThumbsUp,
  HandThumbsUpFill,
  Plus,
  Send,
} from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import {
  addComment,
  changeCommentId,
  getComments,
  getPosts,
} from "../redux/action"
import avatar from "../assets/user-avatar.webp"
import moment from "moment/moment"
import CommentArea from "./CommentArea"
import { Link } from "react-router-dom"

const PostsHome = () => {
  const dispatch = useDispatch()
  const [showZone, setShowZone] = useState(false)
  const posts = useSelector((state) => state.post.post)
  const [showCommentZoneForPost, setShowCommentZoneForPost] = useState(null)

  useEffect(() => {
    dispatch(getPosts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [followerCountMap, setFollowerCountMap] = useState({})

  const getFollowerCount = (user) => {
    const userId = user._id
    if (followerCountMap[userId]) {
      return followerCountMap[userId]
    } else {
      const followerCount =
        Math.floor(Math.random() * (100000 - 5000 + 1)) + 5000
      setFollowerCountMap((prevMap) => ({
        ...prevMap,
        [userId]: followerCount,
      }))
      return followerCount
    }
  }

  return (
    <>
      {posts

        .map((post) => {
          const postDate = moment(post.createdAt)
          const timeAgo = postDate.fromNow()
          return (
            <Row
              key={post._id}
              className="border rounded pt-2 mt-2 flex-column postHome"
            >
              <Col className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src={post.user.image ? post.user.image : avatar}
                    alt=""
                    style={{ width: "50px", height: "50px" }}
                    className="me-2"
                  />
                  <div>
                    <p className="m-0 fw-bold" style={{ fontSize: "14px" }}>
                      {post.user.name ? post.user.name : post.username}{" "}
                      {post.user.surname ? post.user.surname : ""}
                    </p>
                    <p
                      className="m-0 text-black-50"
                      style={{ fontSize: "12px" }}
                    >
                      {getFollowerCount(post.user).toLocaleString()} follower
                    </p>
                    <p
                      className="m-0 text-black-50"
                      style={{ fontSize: "12px" }}
                    >
                      {timeAgo}
                    </p>
                  </div>
                </div>
                <Link to={`/profile/${post.user._id}`}>
                  <p className="text-primary fw-bold text-start m-0">
                    <span className="d-flex" style={{ cursor: "pointer" }}>
                      <Plus className="fs-3" /> Segui
                    </span>
                  </p>
                </Link>
              </Col>
              <Col className="mt-2">
                <p style={{ fontSize: "14px", lineHeight: "1.2em" }}>
                  {post.text}
                </p>
              </Col>
              <Col className="p-0">
                <img src={post.image} alt="" className="w-100" />
                <span className="ms-3 mt-2 d-flex align-items-center">
                  <HandThumbsUpFill className="text-primary me-1" />{" "}
                  <span style={{ fontSize: "12px" }}>10</span>
                </span>
              </Col>
              <Row className="justify-content-center w-100 m-0 px-2">
                <Col className="d-flex justify-content-evenly mt-2 border-top">
                  <div className="py-1 post-interation px-2 mt-2">
                    <HandThumbsUp className="me-2" />{" "}
                    <span className="d-none d-sm-inline">Consiglia</span>
                  </div>
                  <div
                    className="py-1 post-interation px-2 mt-2"
                    onClick={() => {
                      dispatch(getComments(post._id))
                      dispatch(changeCommentId(post._id))
                      setShowCommentZoneForPost(post._id)
                    }}
                  >
                    <ChatDots className="me-2" />
                    <span className="d-none d-sm-inline">Commenta</span>
                  </div>
                  <div className="py-1 post-interation px-2 mt-2">
                    <ArrowClockwise className="me-2" />
                    <span className="d-none d-sm-inline">Diffondi il post</span>
                  </div>
                  <div
                    className="py-1 post-interation px-2 mt-2"
                    onClick={() => dispatch(addComment())}
                  >
                    <Send className="me-2" />
                    <span className="d-none d-sm-inline">Invia</span>
                  </div>
                </Col>
              </Row>
              {showCommentZoneForPost ? (
                <Row className="w-100 mt-2 mx-0 p-0">
                  <Col className="py-2" style={{ fontSize: "14px" }}>
                    <CommentArea postId={post._id} />
                  </Col>
                </Row>
              ) : (
                ""
              )}
            </Row>
          )
        })
        .reverse()}
    </>
  )
}
export default PostsHome
