import React from 'react';
import './Home.css';
import { LangButton } from '../index';


function Home({langauges, welcome}) {

    //on language select, check if it is curent, if not, change it
  return (
    <section id='lang-section'>
        <h2>{welcome}</h2>
        <div id="language-container">
          {langauges.map(lang => (
            <LangButton key={lang.code} lang={lang.name} code={lang.code} />
          ))}
        </div>
    </section>
  )
}

export default Home