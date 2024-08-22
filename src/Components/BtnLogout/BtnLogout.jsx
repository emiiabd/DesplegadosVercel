import React from 'react';
import { useGlobalContext } from '../../Context/GlobalContext';
import { Link } from 'react-router-dom';
import './BtnLogout.css';


const BtnLogout = () => {

  //Context
  const {handleLogOut} = useGlobalContext();
  
  return (
    <Link to={'/login'} className='btnLogout' onClick={handleLogOut}>Logout</Link>
  );
};

export default BtnLogout;