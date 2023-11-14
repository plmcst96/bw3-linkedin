import React, { useState } from 'react';
import ChatUser from './ChatUser';

const Chatbox = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [isOffline, setisOffline] = useState(false); 
  const [peopleList, setPeopleList] = useState([
    'Person 1',
    'Person 2',
    'Person 3',
  ]);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
    if (isChatboxOpen) {
      setisOffline(!isOffline);
    }
  };

  return (
    <div className= {`border d-none d-sm-block z-2 bg-white  chatbox ${isChatboxOpen ? 'open' : ''}`} style={{width:"200px", position:"sticky", bottom:"0vh",left:"84vw", cursor: isChatboxOpen ? '' : 'pointer'  }}>
      <div className="chatbox-header d-flex justify-content-around align-items-center" onClick={toggleChatbox} style={{backgroundColor: isChatboxOpen ? '#0e76a8' : ''  }}>
        <p className='m-1 ' style={{cursor: isChatboxOpen ? 'pointer' : '', fontSize:"1.2vw" , fontWeight:"400", color: isChatboxOpen ? "white" : "black" }}>Messaggi</p>
        <div className='rounded-circle' style={{ width: "10px", height: "10px", backgroundColor: isOffline ? '#f38071' : '#7df36e', cursor: isChatboxOpen ? 'pointer' : ''}}></div>
      </div>
      <div className="chatbox-content">
        {isChatboxOpen && (
          <div className='ps-2 text-start'>
          {peopleList.map((person, index) => (
                <ChatUser key={index} person={person} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbox;

   