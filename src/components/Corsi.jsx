import { PersonFillAdd } from "react-bootstrap-icons";


const Corsi = () => {

  return ( <>
  <div className="d-flex align-items-center">
    <img src="http://www.placekitten.com/200" alt=""  width={50} className="rounded-circle m-2"/>
    <div>
        <p className="m-0"><strong>Nome Persona</strong></p>
        <p className="mb-0">Nome Qualifica</p>
         </div>
  </div>
  <button className="btn border border-2 border-black rounded-pill "><PersonFillAdd  className="me-2 pb-1"/> Collegati</button>
  </> 
  );
};

export default Corsi;
