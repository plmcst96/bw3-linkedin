
import React from 'react';

const ChatUser = ({ person }) => {
  return (<div className='d-flex py-2 container-fluid  align-items-center text-start'>
    <img src={person.image} alt="" width={"25%"} height={"25%"} />
    <p className='  ms-2' style={{cursor:"pointer"}} >{person.name || "Mr.NoName"} {person.surname}</p>
    </div>

  );
};

export default ChatUser;
