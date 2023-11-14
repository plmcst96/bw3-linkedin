
import React from 'react';

const ChatUser = ({ person }) => {
  return (

    <p className='my-3 me-2' style={{cursor:"pointer", borderBottom:"1px  solid gray"}} >{person}</p>
  );
};

export default ChatUser;
