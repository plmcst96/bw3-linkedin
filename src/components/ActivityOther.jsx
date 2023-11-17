import { Button, Col, Row } from "react-bootstrap"
import { ArrowRight } from "react-bootstrap-icons"
import { useSelector } from "react-redux"

import img from "../assets/img1.png"
import { useParams } from "react-router-dom"

const ActivityOther = () => {
  const posts = useSelector((state) => state.post.post)

  const params = useParams()

  return (
    <>
      <Col className="rounded border mt-3 px-3 pt-4">
        <Row className="h-100 justify-content-between">
          <Col className="text-nowrap">
            <h5 className="fw-bold mb-0">Attività</h5>
            <span className="text-primary">14 follower</span>
          </Col>

          <Row className="flex-column justify-content-start">
            {}
            {posts
              .map((myPost) => (
                <>
                  {params.userId === myPost.user._id ? (
                    <Col className="mt-3 d-flex justify-content-start  align-items-start">
                      <img
                        src={myPost.image ? myPost.image : img}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                      />
                      <div style={{ maxWidth: "341px" }} className="ms-3">
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
    </>
  )
}

export default ActivityOther
