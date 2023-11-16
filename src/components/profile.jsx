import { Col, Container, Row } from "react-bootstrap"
import User from "./User"
import Consigliati from "./Consigliati"
import Risorse from "./Risorse"
import Activity from "./Activity"
import Interessi from "./Interessi"
import Student from "./Student"
import Experiences from "./Experiences"
import Sidebar from "./Sidebar"

const Profile = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs={12} md={8}>
          <User />
          <Row>
            <Consigliati />
          </Row>
          <Risorse />
          <Activity />
          <Experiences />
          <Student />
          <Interessi />
        </Col>
        <Col md={4} className="d-none d-lg-block">
          <Sidebar />
        </Col>
      </Row>
    </Container>
  )
}

export default Profile
