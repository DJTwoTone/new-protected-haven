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


  const [userlang, setUserlang] = useState(navigator.language.split('-')[0] || 'en');
  const [displayLang, setDisplayLang] = useState(translations[supportedLangObj[userlang] || 'english']);

  // console.log(displayLang);
  
  //set that part of the translation to state
  //if no translation set english  
  const langauges = Object.values(translations).map(lang => ({
    name: lang.script,
    code: lang.code,
    welcome: lang.welcome
  }));
  
  //pass translations to form from state

  return (
    <div className="App">
      <Header />
      <Logo />
      <Routes>
        <Route path="/" element={<Home welcome={displayLang.welcome} langauges={langauges} setUserlang={setUserlang} displayLang={displayLang} setDisplayLang={setDisplayLang}/>} />
        <Route path='report/:lang' element={<Report displayLang={displayLang}/>} />
      </Routes>
      
      <Footer displayLang={displayLang} />
    </div>
  );
}

export default App;
