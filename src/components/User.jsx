import { useEffect, useState } from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { PencilFill } from "react-bootstrap-icons"
import ModaleUserPut from "./ModaleUserPut"

const User = () => {
  const [userMe, setUserMe] = useState([])
  const [modalShow, setModalShow] = useState(false)

  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZjdiN2M1NWU3ZTAwMThmODNjMTEiLCJpYXQiOjE2OTk4NzA2NDcsImV4cCI6MTcwMTA4MDI0N30.RSYpdD_NFfYv3NplWoFuFpBBjUPdLHi9DCtxJfDpnj8"

  const getUserMe = async () => {
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization: key,
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        console.log("eccoli", data)
        setUserMe(data)
      } else {
        throw new Error("Sei un ladro non puoi entrare nel mio profilo!")
      }
    } catch (error) {
      console.log("errore", error)
    }
  }

  useEffect(() => {
    getUserMe()
  }, [])

  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} sm={11} md={7}>
          <Row className="flex-column" style={{ height: "412px" }}>
            <Col
              style={{ minHeight: "201px", maxHeight: "201px" }}
              className="bg-dark rounded-top"
            >
              <img src="" alt="" />
            </Col>
            <Col className="h-100 rounded-bottom border">
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
                      src={userMe.image}
                      alt=""
                      style={{
                        position: "absolute",
                        top: "3.5%",
                        left: "3%",
                        borderRadius: "50%",
                        width: "150px",
                        height: "150px",
                      }}
                    />
                  </div>
                  <div className="text-end me-5 fs-5">
                    <Button
                      style={{
                        cursor: "pointer",
                      }}
                      onClick={() => setModalShow(true)}
                    >
                      <PencilFill />
                    </Button>
                    <ModaleUserPut
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="fw-bold fs-3">
                    {userMe.name} {userMe.surname}
                  </div>
                  <div className="fs-5">{userMe.title}</div>
                  <div className="text-muted">{userMe.area}</div>
                </Col>
                <Col></Col>
                <Col xs={12}>
                  <Button className="btn rounded-pill fw-bold">
                    Disponibile per
                  </Button>
                  <Button className="btn mx-3 rounded-pill fw-bold bg-white text-primary">
                    Aggiungi sezione del profilo
                  </Button>
                  <Button className="btn rounded-pill fw-bold bg-white btn-outline-secondary text-muted">
                    Altro
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default User
