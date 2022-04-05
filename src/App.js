import './App.css';
import { useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import { Header, Footer, Logo, Home, Report } from './components';
import translations from './assets/translations';

function App() {
  

  // current supported languages are English, Chinese, Vietnamese, and Tagalog
  const supportedLangObj = {
    'en': 'english',
    'zh': 'chinese',
    'vi': 'vietnamese',
    'tl': 'tagalog'
  }

  let navigatorLangauge = navigator.language.split('-')[0] 
  // const [userlang, setUserlang] = useState(navigator.language.split('-')[0] || 'en');
  const [displayLang, setDisplayLang] = useState(translations[supportedLangObj[navigatorLangauge] || 'english']);

  // console.log(displayLang);
  
  //set that part of the translation to state
  //if no translation set english  
  const langauges = Object.values(translations).map(lang => ({
    name: lang.script,
    code: lang.code
  }));

  function changeDisplayLang(lang) {
    setDisplayLang(translations[supportedLangObj[lang] || 'english']);
  }
  
  //pass translations to form from state

  return (
    <div className="App">
      <Header />
      <Logo />
      <Routes>
        <Route path="/" element={<Home welcome={displayLang.welcome} langauges={langauges} />} />
        <Route path='report/:lang' element={<Report displayLang={displayLang} changeDisplayLang={changeDisplayLang} />} />
      </Routes>
      
      <Footer displayLang={displayLang} />
    </div>
  );
}

export default App;
