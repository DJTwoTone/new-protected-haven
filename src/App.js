import './App.css';
import {Route, Routes} from 'react-router-dom';
import { Header, Footer, Logo, Home } from './components';
import translations from './assets/translations';

function App() {
  
  //get default browser language
  //set that part of the translation to state
  //if no translation set english  
  console.log(Object.values(translations).map(lang => lang.name));
  console.log(navigator.language)
  
  //pass translations to form from state

  return (
    <div className="App">
      <Header />
      <Logo />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
