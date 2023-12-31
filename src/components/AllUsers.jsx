import { Row, Col, Card, Button } from "react-bootstrap"
import { PersonFillAdd } from "react-bootstrap-icons"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
const AllUsers = () => {
  const [userData, setUserData] = useState([])
  const me = useSelector((state) => state.user.userMe)
  console.log("poi", me)

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
    <Row className=" justify-content-center">
      {userData.map((userList, i) =>
        me._id === userList._id ? (
          ""
        ) : (
          <Col xs={11} md={4} lg={2} className="mx-1 my-4" key={i}>
            <Card className="h-100">
              <Card.Img className="h-50" variant="top" src={userList.image} />
              <Card.Body className="d-flex flex-column justify-content-center">
                <div className="d-flex flex-column justify-content-center flex-grow-1 ">
                  <Card.Title>
                    {userList.name} {userList.surname}{" "}
                  </Card.Title>
                  <Card.Text>{userList.title || "Web Developer"}</Card.Text>
                </div>
                <Button
                  variant="white"
                  className="btn border border-2 border-black rounded-pill mb-2"
                >
                  <PersonFillAdd className="me-2 pb-1" /> Collegati
                </Button>
              </Card.Body>
            </Card>
          </Col>
        )
      )}
    </Row>
  )
}

export default AllUsers
