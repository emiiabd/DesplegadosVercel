import React from 'react';
import { Link } from 'react-router-dom';
import './RenderChannels.css';

const RenderChannels = ( {channels, workSpaceID, renderHiddenNav, renderNewChannel, channelID } ) => {

  const channelsName = channels.map((i) => 
    <Link to={`/workSpace/${workSpaceID}/${i.id}`} key={i.id} className="channelName" style={String(i.id) === String(channelID) ? {backgroundColor: '#4f5d58'} : {}}>#{i.name}</Link>
  );

  return (
    <div className='channels'>
      <h3>Canales</h3>
      <div className="channelNames" onClick={renderHiddenNav}>
        {channelsName}
        <div className="channelName createChannel" onClick={renderNewChannel}>
          <p>Crear un nuevo canal</p>
        </div>
      </div>
    </div>
  );
};

export default RenderChannels;