import { Container } from 'react-bootstrap'
import User from './User'
import Consigliati from './Consigliati'
import Risorse from './Risorse'
import Activity from './Activity'
import Interessi from './Interessi'
import Student from './Student'
import Experiences from './Experiences'

const Profile = () => {
  return (
    <Container className="mt-5">
      <User />
      <Consigliati />
      <Risorse />
      <Activity />
      <Experiences />
      <Student />
      <Interessi />
    </Container>
  )
}

export default Profile
