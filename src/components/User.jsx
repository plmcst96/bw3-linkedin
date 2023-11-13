import { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { PencilFill, ThreeDots } from 'react-bootstrap-icons'
import ModaleUserPut from './ModaleUserPut'

const User = () => {
  const [userMe, setUserMe] = useState([])
  const [modalShow, setModalShow] = useState(false)

  const key =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZjdmM2M1NWU3ZTAwMThmODNjMTIiLCJpYXQiOjE2OTk4NzA3MDcsImV4cCI6MTcwMTA4MDMwN30.fNI0BhmrkJkjQ9j41viB-72QO6SMnWnlwEGIyAqz3Ws'

  const getUserMe = async () => {
    try {
      const res = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/me',
        {
          headers: {
            Authorization: key,
          },
        }
      )
      if (res.ok) {
        const data = await res.json()
        console.log('eccoli', data)
        setUserMe(data)
      } else {
        throw new Error('Sei un ladro non puoi entrare nel mio profilo!')
      }
    } catch (error) {
      console.log('errore', error)
    }
  }

  useEffect(() => {
    getUserMe()
  }, [])

  return (
    <>
      <Row>
        <Col xs={12} sm={11} md={8}>
          <Row className="flex-column" style={{ height: '412px' }}>
            <Col
              style={{ minHeight: '201px', maxHeight: '201px' }}
              className="bg-dark rounded-top"
            >
              <img src="" alt="" />
            </Col>
            <Col className="h-100 rounded-bottom border pb-3">
              <Row className="position-relative h-100">
                <Col xs={12}>
                  <div
                    style={{
                      width: '160px',
                      height: '160px',
                      top: '-60%',
                      borderRadius: '50%',
                    }}
                    className="position-absolute bg-white"
                  >
                    <img
                      src={userMe.image}
                      alt=""
                      style={{
                        position: 'absolute',
                        top: '3.5%',
                        left: '3%',
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px',
                      }}
                    />
                  </div>
                  <div className="text-end fs-5">
                    <PencilFill
                      onClick={() => setModalShow(true)}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                </Col>
                <Col>
                  <div className="fw-bold fs-3 text-nowrap">
                    {userMe.name} {userMe.surname}
                  </div>
                  <div className="fs-5 text-nowrap">{userMe.title}</div>
                  <div className="text-muted text-nowrap">{userMe.area}</div>
                </Col>
                <Col></Col>
                <Col xs={12} className="d-flex">
                  <Button className="btn rounded-pill fw-bold text-nowrap">
                    Disponibile per
                  </Button>
                  <Button className="btn mx-2 rounded-pill fw-bold bg-white text-primary d-none d-sm-block text-nowrap">
                    Aggiungi sezione del profilo
                  </Button>
                  <Button className="btn rounded-pill fw-bold bg-white btn-outline-secondary text-muted">
                    <ThreeDots className="d-sm-none" />
                    <span className="d-none d-sm-inline">Altro</span>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <ModaleUserPut
        show={modalShow}
        onHide={() => setModalShow(false)}
        profile={userMe}
        refresh={getUserMe}
      />
    </>
  )
}

export default User
