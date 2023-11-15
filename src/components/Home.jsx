import { Col, Container, Row } from 'react-bootstrap'
import LeftSideBar from './LeftSideBar'
import AddPost from './AddPost'

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-evenly">
        <LeftSideBar />
        <AddPost />
      </Row>
    </Container>
  )
}
export default Home
