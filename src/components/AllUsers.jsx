import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { Pencil, PersonFillAdd } from "react-bootstrap-icons";
import DiscoverUser from "./DiscoverUser";
import Corsi from "./Corsi";
import { useEffect, useState } from "react";
const AllUsers = () => {
    const [userData, setUserData] = useState([]);
   

    useEffect(() => {
        
        fetch("https://striveschool-api.herokuapp.com/api/profile/", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUzNTc0NWRkOTllZjAwMTlhMDkzM2UiLCJpYXQiOjE2OTk5NjA2NDUsImV4cCI6MTcwMTE3MDI0NX0.KD8qWCSi2X4Z56xRN9trMclgqG_Gifdc9M7JX20dqqQ",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`err`);
            }
            return response.json();
          })
          .then((data) => setUserData(data))
          .catch((error) => console.error( error));
      }, []);
  return (
    <div className="d-flex flex-wrap">
   
    {userData.map((userList) => 
    <div className="mx-2 my-4">
        <Card style={{width:"18rem"}}>
        <Card.Img variant="top" src={userList.image} />
        <Card.Body>
          <Card.Title>{userList.name} {userList.surname} </Card.Title>
          <Card.Text>
            {userList.title || "Web Developer"} 
            
          </Card.Text>
          <Button variant="white" className="btn border border-2 border-black rounded-pill mb-2"><PersonFillAdd  className="me-2 pb-1"/> Collegati</Button>
        </Card.Body>
      </Card>
      </div>
         )  }
        
    </div>
    
  );
};

export default AllUsers;
