import svg from "../404.svg"
import logo from "../link.png"

const PageNotFound = () => {
  return (
    <>
      <div className="cont-404">
        <img src={logo} alt="" width={"150px"} style={{ marginLeft: "2em" }} />
        <img src={svg} alt="svg" style={{ marginTop: "5em" }} />
      </div>
    </>
  )
}

export default PageNotFound
