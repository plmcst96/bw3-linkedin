import { Col, Row, Dropdown } from 'react-bootstrap'
import {
  BriefcaseFill,
  CalendarDate,
  PencilFill,
  Plus,
} from 'react-bootstrap-icons'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ModaleExperiences from './ModaleExperiences'
import { format } from 'date-fns'
import ImageExperience from './ImageExperience'
import logo from '../assets/experience.png'

const Experiences = () => {
  const [experience, setExperience] = useState([])
  const user = useSelector((state) => state.user.userMe)
  const [modalShow, setModalShow] = useState(false)
  const [showImg, setShowImg] = useState(false)
  const [selecetedExperience, setSelectedExperience] = useState()

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const handleExperienceClick = (ex) => {
    setSelectedExperience(ex)
    setModalShow(true)
  }

  const handelExperienceImgClick = (ex) => {
    setSelectedExperience(ex)
    setShowImg(true)
  }

  return (
    <>
      <Col className="rounded border mt-3 px-3 py-4">
        <Row>
          <Col className="d-flex justify-content-between align-items-center h-25">
            <h5 className="fw-bold">Esperienze</h5>
            <div className="d-flex align-items-center">
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
            </div>
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
                    style={{ width: '60px', height: '60px' }}
                    onClick={() => handelExperienceImgClick(ex)}
                  />
                </div>
                <div>
                  <p className="fw-bold m-0">{ex.role}</p>
                  <p className="m-0">{ex.company}</p>
                  <p className="m-0 text-black-50">
                    {format(new Date(ex.startDate), 'yyyy/MM/dd')} |{' '}
                    {format(new Date(ex.endDate), 'yyyy/MM/dd')}
                  </p>
                  <p className="m-0 text-black-50">{ex.area}</p>
                  <p className="m-0">{ex.description}</p>
                </div>
              </div>
              <PencilFill
                className="fs-5"
                onClick={() => handleExperienceClick(ex)}
              />
            </Col>
          ))}
        </Row>
      </Col>
      <ModaleExperiences
        show={modalShow}
        onHide={() => {
          setModalShow(false)
          getExperiences()
        }}
        experience={experience}
        id={user._id}
        selecetedExperience={selecetedExperience}
        setSelectedExperience={setSelectedExperience}
      />
      <ImageExperience
        experience={experience}
        show={showImg}
        onHide={() => setShowImg(false)}
        setSelectedExperience={setSelectedExperience}
        selecetedExperience={selecetedExperience}
        id={user._id}
      />
    </>
  )
}

export default Experiences
