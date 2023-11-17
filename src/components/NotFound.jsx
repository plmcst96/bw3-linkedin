import { Link } from "react-router-dom"
import svg from "../assets/404.svg"
import logo from "../assets/link.png"

const PageNotFound = () => {
  return (
    <>
      <div className="cont-404">
        <Link to={"/"}>
          <img
            src={logo}
            alt=""
            width={"150px"}
            style={{ marginLeft: "2em" }}
          />
        </Link>
        <img src={svg} alt="svg" style={{ marginTop: "5em" }} />
      </div>
    </>
  )
}

export default PageNotFound
