import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getUserMe } from "../redux/action"
import {
  BookmarkFill,
  CaretDownFill,
  CaretUpFill,
  Plus,
  SlashSquareFill,
} from "react-bootstrap-icons"
import { Link } from "react-router-dom"

const LeftSideBar = () => {
  const userMe = useSelector((state) => state.user.userMe)
  const [showZone, setSowZone] = useState(false)

  const handleOnClick = () => {
    setSowZone(true)
  }
  const handleOnClick2 = () => {
    setSowZone(false)
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserMe())
  }, [dispatch])

  return (
    <>
      <Col xs={12} lg={2} className="flex-column">
        <Row className="flex-column">
          <Link to="/profile" className="p-0 nav-link">
            <Col
              style={{ minHeight: "90px", maxHeight: "90px" }}
              className="bg-dark rounded-top"
            >
              <img src="" alt="" />
            </Col>
            <Col className="h-100  border pb-3">
              <Row className="position-relative h-100">
                <Col xs={12}>
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      top: "50%",
                      left: "50%",
                      borderRadius: "50%",
                    }}
                    className="position-absolute bg-white peppa"
                  >
                    <img
                      src={userMe.image}
                      alt=""
                      style={{
                        position: "absolute",
                        top: "4.3%",
                        left: "5%",
                        borderRadius: "50%",
                        width: "90px",
                        height: "90px",
                      }}
                    />
                  </div>
                </Col>
                <Col className="mt-5 text-center p-0">
                  <div
                    className="fw-bold text-nowrap text-center"
                    style={{ fontSize: "15px" }}
                  >
                    {userMe.name} {userMe.surname}
                  </div>
                  <div
                    className="text-nowrap text-black-50"
                    style={{ fontSize: "14px" }}
                  >
                    {userMe.title}
                  </div>
                </Col>
              </Row>
            </Col>
          </Link>
          <Col
            className={`d-lg-block border-start border-end border-bottom rounded-bottom ${
              showZone ? "d-block" : "d-none"
            }`}
          >
            <Row className="flex-column">
              <Col
                className="d-flex align-items-start p-3"
                style={{ fontSize: "12px" }}
              >
                <div>
                  <p className="mb-0 text-black-50">Collegamenti</p>
                  <p className="mb-0 fw-bold">Espandi la tua rete</p>
                </div>
                <p className="text-primary fw-bold">14</p>
              </Col>
              <Col
                className="d-flex align-items-start p-3 flex-column border-top"
                style={{ fontSize: "12px" }}
              >
                <p className="mb-0">
                  Accedi a strumenti e informazioni in esclusiva
                </p>
                <p className="fw-bold mb-0">
                  <SlashSquareFill color="gold" />
                  <u className="ms-2">Prova Premium gratis</u>
                </p>
              </Col>
              <Col
                className="d-flex align-items-start p-3 flex-column border-top"
                style={{ fontSize: "12px" }}
              >
                <p className="mb-0">
                  <BookmarkFill className="me-2 text-black-50" />I miei elementi
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col
            className={` d-lg-block ${showZone ? "d-block" : "d-none"}`}
            style={{ fontSize: "14px" }}
          >
            <Row className="mt-3 flex-column">
              <Col className="border rounded-top p-2">
                <p className="text-primary fw-bold">Gruppi</p>
                <p className="text-primary fw-bold d-flex al'ign-item-center">
                  Eventi
                  <Plus className="ms-5 fs-4 text-black" />
                </p>
                <p className="text-primary fw-bold mb-0">Hashtag seguiti</p>
              </Col>
              <Col className="border-start border-end border-bottom rounded-bottom">
                <p className="text-black-50 text-center fw-bold my-2">
                  Scopri di più
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col
        xs={12}
        lg={3}
        className="text-center mt-3 rounded-1 d-lg-none mb-2 peppas"
      >
        {showZone ? (
          <div onClick={handleOnClick2} className="d-lg-none">
            <span>
              Meno dettagli
              <CaretUpFill />
            </span>
          </div>
        ) : (
          <div onClick={handleOnClick} className="d-lg-none">
            <span>
              Vedi altro
              <CaretDownFill />
            </span>
          </div>
        )}
      </Col>
    </>
  )
}

export default LeftSideBar
