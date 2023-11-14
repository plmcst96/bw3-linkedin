import { useState } from "react";



const Searchlist=()=>
{
    const [UserData,setUserData]=useState([])
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
      

    return(
    //    const userSearched= UserData.filter(UserId)
        console.log("ciao")
    )
}
export default Searchlist