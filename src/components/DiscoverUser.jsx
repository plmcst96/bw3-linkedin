import { PersonFillAdd } from "react-bootstrap-icons";


const DiscoverUser = () => {

  return ( <>
  <div className="d-flex align-items-center ">
    <img src="http://www.placekitten.com/200" alt=""  width={50} className="rounded-circle m-2"/>
    <div>
        <p className="m-0"><strong>Nome Persona</strong></p>
        <p className="mb-0">Nome Qualifica</p>
         </div>
  </div>
  <button className="btn border border-2 border-black rounded-pill mb-2"><PersonFillAdd  className="me-2 pb-1"/> Collegati</button>
  </> 
  );
};

export default DiscoverUser;
