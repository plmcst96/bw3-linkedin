import { Row, Col, Container } from "react-bootstrap"
import { Pencil } from "react-bootstrap-icons"
import DiscoverUser from "./DiscoverUser"
import Corsi from "./Corsi"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const Sidebar = () => {
  const [userData, setUserData] = useState([])

  const randomNum = []
  for (let i = 0; i < 4; i++) {
    randomNum[i] = Math.floor(Math.random() * userData.length)
  }

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzNTc0NWRkOTllZjAwMTlhMDkzM2UiLCJpYXQiOjE2OTk5NjA2NDUsImV4cCI6MTcwMTE3MDI0NX0.KD8qWCSi2X4Z56xRN9trMclgqG_Gifdc9M7JX20dqqQ",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`err`)
        }
        return response.json()
      })
      .then((data) => setUserData(data))
      .catch((error) => console.error(error))
  }, [])
  return (
    <Container>
      <Row className="w-100">
        <Col md={5} lg={3} className="d-none d-lg-block">
          <div className="rounded border  my-2 p-1">
            <div className="d-flex justify-content-between  p-3">
              <div className=" text-start me-2">
                <p style={{ fontSize: "14px", fontWeight: "600", margin: "0" }}>
                  Lingua del profilo
                </p>
                <p className="m-0" style={{ fontSize: "14px" }}>
                  Italiano
                </p>
              </div>
              <Pencil />
            </div>
            <hr className="m-0" />
            <div className="d-flex justify-content-between  p-3">
              <div className=" text-start me-2">
                <p style={{ fontSize: "14px", fontWeight: "600", margin: "0" }}>
                  Public profile & URL
                </p>
                <p className="m-0" style={{ fontSize: "14px" }}>
                  www.linkedin.com/in/...
                </p>
              </div>
              <Pencil />
            </div>
          </div>

          {/* first section */}

          {/* second section */}

          <div className="rounded border  my-2 p-1 px-2">
            <p className="text-start m-2" style={{ fontSize: "14px" }}>
              Persone che potresti conoscere
            </p>

            <DiscoverUser user={userData[randomNum[0]]} />
            <DiscoverUser user={userData[randomNum[1]]} />
            <DiscoverUser user={userData[randomNum[2]]} />
            <DiscoverUser user={userData[randomNum[3]]} />

            <hr className="m-2" />
            <Link
              to="/AllUsers"
              className="m-2 text-center nav-link text-secondary"
              style={{ fontWeight: "600" }}
            >
              Mostra tutto
            </Link>
          </div>
          {/* second section */}
          {/* third section */}
          <div className="rounded border  my-2 p-1 px-2">
            <div className="d-flex p-2 align-items-center">
              <img
                src="assets/174857.png"
                alt="linkedIn"
                width={20}
                height={20}
                className="me-1"
              />
              <p className="m-0">LEARNING</p>
            </div>
            <div
              className="text-start p-2"
              style={{ fontSize: "14px", fontWeight: "400" }}
            >
              Aggiungi nuove competenze con questi corsi. gratuiti per 24 ore
            </div>
            <Corsi />
            <hr className="m-2" />
            <a
              href="/"
              className="m-2 text-decoration-none text-secondary"
              style={{ fontWeight: "600", fontSize: "12px" }}
            >
              Visualizza i miei suggerimenti
            </a>
          </div>

          {/* thirdsection */}
        </Col>
      </Row>
    </Container>
  )
}

export default Sidebar
