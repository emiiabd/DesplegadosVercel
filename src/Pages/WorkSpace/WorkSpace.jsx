import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './WorkSpace.css'
import { getUserById, getWorkSpaceInfo, saveMessages } from '../../helpers/helpers'
import {BtnHidden, BtnBack, RenderChannels, RenderNewChannel, ChatMessages, ChatInput} from '../../Components'
import { useGlobalContext } from '../../Context/GlobalContext'
import { v4 as uuid } from 'uuid';

const WorkSpace = () => {
  const parametros =useParams();
  const {userID, setErrors} = useGlobalContext();
  const {workSpaceID, channelID} = parametros;

  const {
    workSpace,
    channels
  } = getWorkSpaceInfo(userID, workSpaceID);

  const {userThumbnail} = getUserById(userID);
  
  const [hiddenNav, setHiddenNav] = useState(false);
  const [newChannelState, setNewChannelState] = useState(false);
  const [message, setMessage] = useState({content: ''});
  const [messagesMemory, setMessagesMemory] = useState(channels.find((i) => i.id === channelID).messages);

  //Reset Errors
  useEffect(() => {
    setErrors({});
  }, [newChannelState]);
  
  useEffect(() => {
    setMessagesMemory(channels.find((i) => i.id === channelID).messages);
  }, [message, channelID]);

  const handleOnSubmit = (e) => {
    let date = new Date();
    e.preventDefault();
    const newMessage = {
      author: 'yo',
      content: String(message.content),
      thumbnail: `${userThumbnail}`,
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, 
      hour: `${String(date.getHours()).length == 1 ? '0' + date.getHours() : date.getHours()}:${String(date.getMinutes()).length == 1 ? '0' + date.getMinutes() : date.getMinutes()}`,
      id: `${uuid()}`
    };
    setMessage({content: ''});
    saveMessages(userID, workSpaceID, channelID, newMessage);
  };

  const renderHiddenNav = () => {
    setHiddenNav(!hiddenNav);
    if(newChannelState) setNewChannelState(!newChannelState);
  };

  const renderNewChannelState = () => {
    setNewChannelState(!newChannelState);
    setHiddenNav(!hiddenNav);
  };

  return (
    <div className='mainView workSpace' >
      <div className="navWS">
        <h3>{workSpace.toUpperCase()}</h3>
        <div className="btnWS">
          <BtnBack/>
          <BtnHidden renderHiddenNav={renderHiddenNav} />
        </div>
        <div className='hiddenNav' >
          {
            hiddenNav &&
            <RenderChannels channels={channels} workSpaceID={workSpaceID} renderHiddenNav={renderHiddenNav} renderNewChannel={renderNewChannelState} channelID={channelID} />
          }
          {
            newChannelState &&  
            <RenderNewChannel renderNewChannelState={renderNewChannelState} userId={userID} workSpaceID={workSpaceID}/>
          }
        </div>
      </div>
      <div className="bodyWS">
        <div className="channelView">
          <RenderChannels channels={channels} workSpaceID={workSpaceID} renderHiddenNav={renderHiddenNav} renderNewChannel={renderNewChannelState} channelID={channelID}/>
          {
            newChannelState &&  
            <RenderNewChannel renderNewChannelState={renderNewChannelState} userId={userID} workSpaceID={workSpaceID}/>
          }
        </div>
        <div className="chatBox">
          <ChatMessages messages={messagesMemory}/>
          <ChatInput handleOnSubmit={handleOnSubmit} message={message} setMessage={setMessage}/>
        </div>
      </div>
    </div>
  )
}

export default WorkSpace