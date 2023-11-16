import { PersonFillAdd } from "react-bootstrap-icons"

const Corsi = () => {
  return (
    <>
      <div className="d-flex align-items-center my-1">
        <iframe
          width="80"
          height="60"
          className="rounded"
          src="https://www.dailymotion.com/embed/video/x3fas4j?"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="mx-2 text-start text-truncate">
          <p className="m-0" style={{ lineHeight: "1em" }}>
            <strong style={{ fontSize: "14px" }}>Premi qua</strong>
          </p>
          <p className="mb-0" style={{ fontSize: "12px" }}>
            Alza il volume
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center my-1">
        <iframe
          width="80"
          height="60"
          src="https://www.dailymotion.com/embed/video/x8e6baj?"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="mx-2 text-start text-truncate">
          <p className="m-0" style={{ lineHeight: "1em" }}>
            <strong style={{ fontSize: "14px" }}>Right in the feels</strong>
          </p>
          <p className="mb-0 " style={{ fontSize: "12px" }}>
            Se leggi questo sei stato RickRollato
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center my-1">
        <iframe
          width="80"
          height="60"
          className="rounded"
          src="https://www.dailymotion.com/embed/video/xtczcf"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="mx-2 text-start text-truncate">
          <p className="m-0" style={{ lineHeight: "1em" }}>
            <strong style={{ fontSize: "14px" }}>
              {" "}
              How to play the saxophone
            </strong>
          </p>
          <p className="mb-0 " style={{ fontSize: "12px" }}>
            Learn with Gandalf
          </p>
        </div>
      </div>
    </>
  )
}

export default Corsi
