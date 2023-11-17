import { Col, Row } from "react-bootstrap"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import logo from "../assets/experience.png"
import { useParams } from "react-router-dom"
import { format } from "date-fns"

const ExperiencesOther = () => {
  const [experience, setExperience] = useState([])
  const user = useSelector((state) => state.user.userMe)
  const params = useParams()
  console.log("tie", experience)
  const key =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZjdmM2M1NWU3ZTAwMThmODNjMTIiLCJpYXQiOjE2OTk4NzA3MDcsImV4cCI6MTcwMTA4MDMwN30.fNI0BhmrkJkjQ9j41viB-72QO6SMnWnlwEGIyAqz3Ws"

  const getExperiences = async () => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${params.userId}/experiences `,
        {
          headers: {
            Authorization: key,
          },
        }
      )

      if (res.ok) {
        const data = await res.json()
        // console.log("mio", data);
        setExperience(data)

        console.log("blablabla", data)
      } else {
        throw new Error("Sei un ladro non puoi entrare nel mio profilo!")
      }
    } catch (error) {
      console.log("errore", error)
    }
  }

  useEffect(() => {
    if (user.length !== 0) {
      getExperiences()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <>
      <Col className="rounded border mt-3 px-3 py-4">
        <Row>
          <Col className="d-flex justify-content-between align-items-center h-25">
            <h5 className="fw-bold">Esperienze</h5>
          </Col>
        </Row>
        <Row className="flex-column">
          {experience.map((ex) => (
            <Col key={ex._id} className="mb-3 d-flex justify-content-between">
              <div className="d-flex">
                <div className="me-3">
                  <img
                    src={ex.image ? ex.image : logo}
                    alt="immagine azienda"
                    style={{ width: "60px", height: "60px", cursor: "pointer" }}
                  />
                </div>
                <div>
                  <p className="fw-bold m-0">{ex.role}</p>
                  <p className="m-0">{ex.company}</p>
                  <p className="m-0 text-black-50">
                    {format(new Date(ex.startDate), "yyyy/MM/dd")}{" "}
                    {ex.endDate
                      ? format(new Date(ex.endDate), "yyyy/MM/dd")
                      : null}
                  </p>
                  <p className="m-0 text-black-50">{ex.area}</p>
                  <p className="m-0">{ex.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </>
  )
}

export default ExperiencesOther
