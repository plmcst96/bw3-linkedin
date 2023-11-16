import { Col } from "react-bootstrap"
import { Pencil } from "react-bootstrap-icons"
import DiscoverUser from "./DiscoverUser"
import Corsi from "./Corsi"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getOtherUser } from "../redux/action"
const Sidebar = () => {
  // const [userData, setUserData] = useState([])
  const dispatch = useDispatch()
  const userData = useSelector((state) => state.other.content)

  const randomNum = []
  for (let i = 0; i < 4; i++) {
    randomNum[i] = Math.floor(Math.random() * userData.length)
  }

  useEffect(() => {
    dispatch(getOtherUser())
  }, [])

  return (
    <Col className="d-none d-lg-block">
      <div className="rounded border  mb-2 p-1">
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
  )
}

export default Sidebar
