import React from 'react';
import './navbar.css'
import { useGlobalContext } from '../../Context/GlobalContext';
import { Link } from 'react-router-dom';
import BtnLogout from '../BtnLogout/BtnLogout';

const NavBar = () => {

  //Context
  const {isLoggedIn} = useGlobalContext();
  
  return (
  <>
    <header className='navBar'>
      <Link to='/'><h2>TripinLack</h2></Link>
      <div className='btnNav'>
        {
          isLoggedIn ? <BtnLogout/> : <></>
        }
      </div>
    </header>
  </>
  );
};

export default NavBar;