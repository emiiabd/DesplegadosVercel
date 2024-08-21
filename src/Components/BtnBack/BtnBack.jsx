import React from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './BtnBack.css';

const BtnBack = () => {
  return (
    <Link to={'../'} className='btnBack' ><FiX /></Link>
  );
};

export default BtnBack;