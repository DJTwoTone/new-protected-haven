import React from 'react';
import './Home.css';
import { LangButton } from '../index';


function Home({langauges}) {

    //on language select, check if it is curent, if not, change it
  return (
    <section id='lang-section'>
        <h2>Welcome. Please select you langauge</h2>
        <div id="language-container">
          {langauges.map(lang => (
            <LangButton key={lang} lang={lang} />
          ))}
        </div>
    </section>
  )
}

export default Home