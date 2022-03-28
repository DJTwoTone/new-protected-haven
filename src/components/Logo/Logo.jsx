import React from 'react';
import './Logo.css';
import phlogo from '../../assets/phlogo.png';

function Logo() {
  return (
    <div className='logo-wrapper'>
        <img src={phlogo} alt="Protected Haven" />
    </div>
  )
}

export default Logo