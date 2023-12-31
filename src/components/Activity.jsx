import { useEffect, useState } from "react"
import { Button, Col, Dropdown, Row } from "react-bootstrap"
import { ArrowRight, PencilFill, Plus, Trash3Fill } from "react-bootstrap-icons"
import { useDispatch, useSelector } from "react-redux"
import { getPosts } from "../redux/action"
import AddPostModal from "./AddPostModal"
import img from "../assets/img1.png"
import { useParams } from "react-router-dom"

const Activity = () => {
  const myPosts = useSelector((state) => state.post.post)
  const myId = useSelector((state) => state.user.userMe._id)
  const [modalPostShow, setModalPostShow] = useState(false)
  const [selectedPost, setSelectedPost] = useState()
  const params = useParams()

  const handleOnClick = (myPost) => {
    setSelectedPost(myPost)
    setModalPostShow(true)
  }

  const handelDelete = (myPost) => {
    setSelectedPost(myPost)
    if (myPost) {
      deletePost(myPost._id)
    }
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZjdmM2M1NWU3ZTAwMThmODNjMTIiLCJpYXQiOjE2OTk4NzA3MDcsImV4cCI6MTcwMTA4MDMwN30.fNI0BhmrkJkjQ9j41viB-72QO6SMnWnlwEGIyAqz3Ws"

  const deletePost = async (id) => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: key,
          },
        }
      )
      if (res.ok) {
        const data = await res.text()
        console.log(data)
        dispatch(getPosts())
      } else {
        throw new Error("Ri-eccoci non impari mai!")
      }
    } catch (error) {
      console.log("errore", error)
    }
  }

  return (
    <>
      <Col className="rounded border mt-3 px-3 pt-4">
        <Row className="h-100 justify-content-between">
          <Col className="text-nowrap">
            <h5 className="fw-bold mb-0">Attività</h5>
            <span className="text-primary">14 follower</span>
          </Col>
          <Col className="mt-3 d-flex justify-content-end me-2">
            {params.userId ? (
              ""
            ) : (
              <>
                {" "}
                <Button
                  variant="outline-primary rounded-pill"
                  onClick={() => handleOnClick()}
                >
                  Crea un post
                </Button>
              </>
            )}
          </Col>
          <Row className="flex-column">
            {}
            {myPosts
              .map((myPost) => (
                <>
                  {myId === myPost.user._id ? (
                    <Col className="mt-3 d-flex justify-content-between align-items-start">
                      <img
                        src={myPost.image ? myPost.image : img}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                      />
                      <div style={{ maxWidth: "341px" }}>
                        <p
                          className="m-0 text-black-50"
                          style={{ fontSize: "14px" }}
                        >
                          <span className="fw-bold">
                            {myPost.user.name
                              ? myPost.user.name
                              : myPost.username}{" "}
                            {myPost.user.surname ? myPost.user.surname : ""}
                          </span>{" "}
                          <span>ha pubblicato questo post - ora</span>
                        </p>
                        <div>
                          <p style={{ fontSize: "14px" }}>{myPost.text}</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Dropdown align="end">
                          <Dropdown.Toggle id="dropdownMenuicon">
                            <Plus className="fs-1 text-black" />
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="end">
                            <Dropdown.Item
                              href="#/action-1"
                              onClick={() => handleOnClick(myPost)}
                            >
                              <PencilFill /> Modifica post
                            </Dropdown.Item>
                            <Dropdown.Item
                              href="#/action-2"
                              onClick={() => handelDelete(myPost)}
                            >
                              <Trash3Fill /> Elimina post
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </Col>
                  ) : (
                    ""
                  )}
                </>
              ))
              .reverse()}
            {/* <p className="fw-bold mb-0 mt-3">Non hai ancora pubblicato nulla</p>
              <span>I post che condividi appariranno qui</span> */}
          </Row>
          <Button
            className="bg-white fw-bold text-secondary rounded-0 mt-2"
            style={{ border: "none", borderTop: "solid 1px lightgrey" }}
          >
            Mostra tutte le attività <ArrowRight />
          </Button>
        </Row>
      </Col>
      <AddPostModal
        show={modalPostShow}
        onHide={() => setModalPostShow(false)}
        selectedPost={selectedPost}
        setSelectedPost={setSelectedPost}
      />
    </>
  )
}

export default Activity
