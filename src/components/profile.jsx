import { Container } from "react-bootstrap"
import User from "./User"
import Consigliati from "./Consigliati"

const Profile = () => {
  return (
    <Container className="mt-5">
      <User />
      <Consigliati />
    </Container>
  )
}

export default Profile
