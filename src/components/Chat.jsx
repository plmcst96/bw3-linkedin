import React, { useEffect, useState } from "react"
import ChatUser from "./ChatUser"
import "../chat.css"

const Chatbox = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false)
  const [isOffline, setIsOffline] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [userData, setUserData] = useState([])
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

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen)
    if (isChatboxOpen) {
      setIsOffline(!isOffline)
    }
  }

  return (
    <div
      onClick={() => setShowChat(!showChat)}
      className={`border rounded-top d-none d-lg-block bg-white chatbox ${
        isChatboxOpen ? "open slide-in" : ""
      }`}
      style={{
        width: "300px",
        zIndex: "1000",
        position: "fixed",
        bottom: "0vh",
        right: "0",
        cursor: isChatboxOpen ? "" : "pointer",
      }}
    >
      <div
        className="chatbox-header d-flex justify-content-around align-items-center "
        onClick={toggleChatbox}
        style={{
          backgroundColor: isChatboxOpen ? "#0e76a8" : "",
        }}
      >
        <p
          className="m-1 flex-grow-1 text-start ms-2"
          style={{
            cursor: isChatboxOpen ? "pointer" : "",
            fontSize: "14px",
            fontWeight: "400",
            color: isChatboxOpen ? "white" : "black",
          }}
        >
          {" "}
          Messaggi{" "}
        </p>

        <div
          className="rounded-circle p-2 me-4"
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: isOffline ? "#f38071" : "#7df36e",
            cursor: isChatboxOpen ? "pointer" : "",
          }}
        ></div>
      </div>
      <div
        className="chatbox-content"
        style={{ maxHeight: "350px", overflowY: "auto" }}
      >
        {isChatboxOpen && (
          <div className="ps-2 text-start pb-3 mt-2">
            {userData.map((person, index) => (
              <ChatUser key={index} person={person} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Chatbox
