import React from 'react';
import './LangButton.css';

function LangButton({lang}) {
  return (
    <div className='lang-button'>
        {lang}    
    </div>
  )
}

export default LangButton