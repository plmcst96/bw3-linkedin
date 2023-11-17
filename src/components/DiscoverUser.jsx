import { PersonFillAdd } from "react-bootstrap-icons"
import { useSelector } from "react-redux"

const DiscoverUser = ({ user }) => {
  const me = useSelector((state) => state.user.userMe)

  if (!user) {
    return null
  }

  return (
    <>
      {me._id === user._id ? (
        ""
      ) : (
        <>
          <div className="d-flex align-items-center ">
            <img
              src={user.image}
              alt=""
              width={40}
              height={40}
              className="rounded-circle m-2"
            />
            <div className="mx-3">
              <p className="m-0" style={{ fontSize: "14px" }}>
                <strong>
                  {user.name || "404 Nome non trovato"} {user.surname}
                </strong>
              </p>

              <p className="mb-0" style={{ fontSize: "12px" }}>
                {" "}
                {user.title}
              </p>
            </div>
          </div>
          <div className="text-center">
            <button
              className="btn border border-2 border-black rounded-pill mb-2 m-auto"
              style={{ fontSize: "14px" }}
            >
              <PersonFillAdd className=" pb-1" /> Collegati
            </button>
          </div>{" "}
        </>
      )}
    </>
  )
}

export default DiscoverUser
