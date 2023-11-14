import { Col, Row, Dropdown } from 'react-bootstrap'
import {
  BriefcaseFill,
  CalendarDate,
  PencilFill,
  Plus,
} from 'react-bootstrap-icons'
import img from '../assets/Logo_Università_Padova.svg.png'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ModaleExperiences from './ModaleExperiences'

const Experiences = () => {
  const [experience, setExperience] = useState({
    role: '',
    company: '',
    startDate: '',
    endDate: '',
    description: '',
    area: '',
  })
  const user = useSelector((state) => state.user.userMe)
  const [modalShow, setModalShow] = useState(false)

  const key =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZjdmM2M1NWU3ZTAwMThmODNjMTIiLCJpYXQiOjE2OTk4NzA3MDcsImV4cCI6MTcwMTA4MDMwN30.fNI0BhmrkJkjQ9j41viB-72QO6SMnWnlwEGIyAqz3Ws'

  const getExperiences = async () => {
    try {
      const res = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${user._id}/experiences `,
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
        console.log(data)
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }

  useEffect(() => {
    if (user.length !== 0) {
      getExperiences()
    }
  }, [user])

  return (
    <Row>
      <Col xs={12} sm={11} md={8} className="rounded border mt-3 px-3 py-4">
        <Row>
          <Col>
            <h5 className="fw-bold">Esperienze</h5>
            <div>
              <img src={img} alt="" style={{ width: '50px' }} />
              <span className="fw-bold ms-3">
                Università degli studi di Padova
              </span>
            </div>
          </Col>
          <Col className="d-flex justify-content-end align-items-center h-25">
            <Dropdown align="end">
              <Dropdown.Toggle id="dropdownMenuicon">
                <Plus className="fs-1 me-3 text-black" />
              </Dropdown.Toggle>

              <Dropdown.Menu className="end">
                <Dropdown.Item
                  href="#/action-1"
                  onClick={() => setModalShow(true)}
                >
                  <BriefcaseFill /> Aggiungi posizione lavorativa{' '}
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <CalendarDate /> Aggiungi pausa lavorativa
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <PencilFill className="fs-5 " />
          </Col>
        </Row>
      </Col>
      <ModaleExperiences
        show={modalShow}
        onHide={() => setModalShow(false)}
        experience={experience}
        id={user._id}
      />
    </Row>
  )
}

export default Experiences
