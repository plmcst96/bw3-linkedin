import React, { useState } from 'react';

const Chatbox = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);
  const [peopleList, setPeopleList] = useState([
    'Person 1',
    'Person 2',
    'Person 3',
  ]);

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <div className= {`border d-none d-sm-block z-2 bg-white  chatbox ${isChatboxOpen ? 'open' : ''}`} style={{width:"200px", position:"sticky", bottom:"0vh",left:"88vw"}}>
      <div className="chatbox-header" onClick={toggleChatbox}>
        Chat
      </div>
      <div className="chatbox-content">
        {isChatboxOpen && (
          <div className=''>
          <ul className='ps-2 text-start'>
            {peopleList.map((person, index) => (
              <li className='list-unstyled' key={index}>{person}</li>
            ))}
          </ul></div>
        )}
      </div>
    </div>
  );
};

export default Chatbox;
