import React from 'react';
import { Link } from 'react-router-dom';
import './LangButton.css';

function LangButton({code, lang}) {
  
  return (
    <Link to={`/report/${code}`}>
      <div className='lang-button'>
          {lang}    
      </div>
    </Link>
    
  )
}

export default LangButton