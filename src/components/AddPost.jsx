import { Button, Col, Row } from "react-bootstrap"
import {
  CalendarWeek,
  Image,
  LayoutTextWindowReverse,
} from "react-bootstrap-icons"
import { useSelector } from "react-redux"
import PostsHome from "./PostsHome"

const AddPost = () => {
  const profileImage = useSelector((state) => state.user.userMe)

  return (
    <>
      <Col xs={12} lg={6}>
        <Row className="flex-column border rounded py-2">
          <Col className="pb-2">
            <Row>
              <div className="d-flex">
                <img
                  src={profileImage.image}
                  alt="profile"
                  className="rounded-circle"
                  style={{ width: "60px", height: "50px" }}
                ></img>
                <Button
                  className="rounded-pill w-100 text-start mx-2"
                  variant="outline-secondary"
                >
                  Avvia un post
                </Button>
              </div>
            </Row>
          </Col>
          <Col className="d-flex justify-content-between">
            <Button
              className="text-start mx-2 p-1 py-3 box d-flex align-items-center"
              style={{ border: "none" }}
            >
              <Image className="text-primary me-2" />
              Contenuti multimediali
            </Button>
            <Button
              className="text-start mx-2 p-1 py-3 box d-flex align-items-center"
              style={{ border: "none" }}
            >
              <CalendarWeek color="darkgoldenrod" className=" me-2" />
              Evento
            </Button>
            <Button
              className="text-start mx-2 p-1 py-3 box d-flex align-items-center"
              style={{ border: "none" }}
            >
              <LayoutTextWindowReverse color="darkorange" className=" me-2" />
              Scrivi un articolo
            </Button>
          </Col>
        </Row>
        <PostsHome />
      </Col>
    </>
  )
}

export default AddPost
