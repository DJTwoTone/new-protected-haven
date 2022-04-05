import React from 'react';
import './Footer.css';

function Footer({displayLang}) {
  
  const { police, medical, information } = displayLang;

  return (
    <footer>
        <ul>
            <li><a href='/'>Protected Haven</a></li>
            <li><a href='tel:112'>{police} - 112</a></li>
            <li><a href='tel:119'>{medical} - 119</a></li>
            <li><a href='tel:114'>{information} - 114</a></li>
            <li><a href='https://www.uspolice.go.kr'>울산남부경찰서</a></li>
        </ul>
    
        
    </footer>
  )
}

export default Footer