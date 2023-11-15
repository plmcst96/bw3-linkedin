import { Col, Container, Row } from "react-bootstrap"
import LeftSideBar from "./LeftSideBar"
import AddPost from "./AddPost"
import RightSideBar from "./RightSideBar"

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-between">
        <LeftSideBar />
        <AddPost />
        <RightSideBar />
      </Row>
    </Container>
  )
}
export default Home
