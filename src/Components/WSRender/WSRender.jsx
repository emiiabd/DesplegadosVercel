import React from 'react';
import { useGlobalContext } from '../../Context/GlobalContext';
import { getUserById } from '../../helpers/helpers';
import { Link } from 'react-router-dom';
import './WSRender.css';

const WSRender = () => {
  //context
  const {userID} = useGlobalContext();
  
  if (!userID) return;
  const userMemory = getUserById(userID).userMemory;
  
  //Mapping the workSpace
  const workSpaces = userMemory.map((i)=>{;
    const generalChannel = i.channels.find((i)=>i.name === 'General');
    
    return (
    <Link to={`/workSpace/${i.workSpaceID}/${generalChannel.id}`} className="WS" key={i.workSpaceID}>
      <div className="imageWS">
        <img src={i.workSpaceThumbnail} alt="img" />
      </div>
      <p>{i.workSpace}</p>
    </Link> 
  );
  });

  return workSpaces;
};

export default WSRender;