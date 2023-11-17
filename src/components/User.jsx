import { useEffect, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { PencilFill, ThreeDots } from "react-bootstrap-icons"
import ModaleUserPut from "./ModaleUserPut"
import { useDispatch, useSelector } from "react-redux"
import { getOtherProfile, getUserMe } from "../redux/action"

import ImageProfile from "./ImageProfile"
import { useParams } from "react-router-dom"

const User = () => {
  const [modalShow, setModalShow] = useState(false)
  const [imageModal, setImageModal] = useState(false)
  const userMe = useSelector((state) => state.user.userMe)
  const profile = useSelector((state) => state.profile.content)
  const params = useParams()
  console.log(params)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserMe())
    if (params.userId) {
      dispatch(getOtherProfile(params))
    }
  }, [dispatch])

  return (
    <Col className="rounded border ">
      <Row className="flex-column" style={{ height: "412px" }}>
        <Col
          style={{ minHeight: "201px", maxHeight: "201px" }}
          className="bg-dark rounded-top"
        >
          <img src="" alt="" />
        </Col>
        <Col className="h-100  pb-3">
          <Row className="position-relative h-100">
            <Col xs={12}>
              <div
                style={{
                  width: "160px",
                  height: "160px",
                  top: "-60%",
                  borderRadius: "50%",
                }}
                className="position-absolute bg-white"
              >
                <img
                  src={params.userId ? profile.image : userMe.image}
                  alt=""
                  style={{
                    position: "absolute",
                    top: "3.5%",
                    left: "3%",
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px",
                  }}
                  onClick={() => setImageModal(true)}
                />
              </div>
              {params.userId ? (
                ""
              ) : (
                <div className="text-end fs-5">
                  <PencilFill
                    onClick={() => setModalShow(true)}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              )}
            </Col>
            <Col>
              <div
                className={`fw-bold fs-3 text-nowrap ${
                  params.userId ? "mt-4" : ""
                }`}
              >
                {params.userId ? profile.name : userMe.name}
                {params.userId ? profile.surname : userMe.surname}
              </div>
              <div className="fs-5 text-nowrap">
                {params.userId ? profile.title : userMe.title}
              </div>
              <div className="text-muted text-nowrap">
                {params.userId ? profile.area : userMe.area}
              </div>
            </Col>
            <Col></Col>
            <Col xs={12} className="d-flex">
              <Button className="btn rounded-pill fw-bold text-nowrap">
                {params.userId ? "Collegati" : "Disponibile per"}
              </Button>
              <Button className="btn mx-2 rounded-pill fw-bold bg-white text-primary d-none d-sm-block text-nowrap">
                {params.userId ? "Messaggio" : "Aggiungi sezione del profilo"}
              </Button>
              <Button className="btn rounded-pill fw-bold bg-white btn-outline-secondary text-muted">
                <ThreeDots className="d-sm-none" />
                <span className="d-none d-sm-inline">Altro</span>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      {params.userId ? (
        ""
      ) : (
        <>
          <ModaleUserPut
            show={modalShow}
            onHide={() => setModalShow(false)}
            profile={userMe}
          />
          <ImageProfile
            show={imageModal}
            onHide={() => setImageModal(false)}
            profile={userMe}
          />
        </>
      )}
    </Col>
  )
}

export default User
