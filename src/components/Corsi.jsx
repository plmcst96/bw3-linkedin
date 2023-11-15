import { PersonFillAdd } from "react-bootstrap-icons";


const Corsi = () => {

  return ( <>
  <div className="d-flex align-items-center my-1">
    <iframe width="80" height="60" className="rounded"
   src="https://www.dailymotion.com/embed/video/x3fas4j?autoplay=1"
     title="YouTube video player" frameborder="0" 
      
      allowfullscreen>
      </iframe>
    <div className="mx-2 text-start">
        <p className="m-0"><strong>Premi qua</strong></p>
        <p className="mb-0">Alza il volume</p>
         </div>
  </div>
  <div className="d-flex align-items-center my-1">
  <iframe width="80" height="60" src="https://www.dailymotion.com/embed/video/x8e6baj?autoplay=1"
  title="YouTube video player" frameborder="0" 

  allowfullscreen></iframe>
    <div className="mx-2 text-start">
        <p className="m-0"><strong>Right in the feels</strong></p>
        <p className="mb-0">Se leggi questo sei stato RickRollato</p>
         </div>
  </div>
  <div className="d-flex align-items-center my-1">
    <iframe width="80" height="60" className="rounded"
    src="https://www.dailymotion.com/embed/video/xtczcf" 
     title="YouTube video player" frameborder="0" 
      allowfullscreen>
      </iframe>
    <div className="mx-2 text-start">
        <p className="m-0"><strong> How to play the saxophone</strong></p>
        <p className="mb-0">Learn with Gandalf</p>
         </div>
  </div>
  </> 
  );
};

export default Corsi;
