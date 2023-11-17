import { Col, Container, Row } from "react-bootstrap"
import User from "./User"
import Consigliati from "./Consigliati"
import Risorse from "./Risorse"
import Activity from "./Activity"
import Interessi from "./Interessi"
import Student from "./Student"
import Experiences from "./Experiences"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { useParams } from "react-router-dom"
import ActivityOther from "./ActivityOther"
import ExperiencesOther from "./ExperienceOther"

const Profiles = () => {
  const params = useParams()
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col Col xs={12} sm={11} lg={8}>
          <Row className="flex-column">
            <User />
            {params.userId ? (
              ""
            ) : (
              <>
                {" "}
                <Consigliati />
                <Risorse />
              </>
            )}
            {params.userId ? <ActivityOther /> : <Activity />}
            {params.userId ? <ExperiencesOther /> : <Experiences />}

            <Student />
            <Interessi />
          </Row>
        </Col>
        <Col md={4} className="d-none d-lg-block">
          <Row>
            <Sidebar />
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  )
}

export default Profiles
