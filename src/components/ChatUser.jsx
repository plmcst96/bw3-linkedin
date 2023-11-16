import "../chat.css"
import React from 'react';

const ChatUser = ({ person }) => {
  return (<div id='chatUser' className='d-flex py-2 container-fluid  align-items-center text-start'>
    <img src={person.image} alt="" width={"50px"} height={"50px"} />
    <p className='  ms-3 flex-grow-1 text-truncate' style={{cursor:"pointer"}} >
      <strong>@{person.username}</strong> <br />
      aka: {person.name || "Mr.NoName"} {person.surname}
      </p>
    </div>

  );
};

export default ChatUser;
