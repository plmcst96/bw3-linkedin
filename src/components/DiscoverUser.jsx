import { PersonFillAdd } from "react-bootstrap-icons";


const DiscoverUser = ({user}) => {
  if (!user) {
    return null;
  }
  console.log(user);
  return ( <>
  <div className="d-flex align-items-center ">
    <img src={user.image} alt=""  width={50} height={50} className="rounded-circle m-2"/>
    <div className="mx-3">
        <p className="m-0"><strong>{user.name  || "404 Nome non trovato"} {user.surname}</strong></p>
        
        <p className="mb-0"> {user.title}</p>
         </div>
  </div>
  <button className="btn border border-2 border-black rounded-pill mb-2"><PersonFillAdd  className="me-2 pb-1"/> Collegati</button>
  </> 
  );

};

export default DiscoverUser;
