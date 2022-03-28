import './App.css';
import {Switch, Route} from 'react-router-dom';
import { Header, Footer, Logo } from './components'

function App() {
  return (
    <div className="App">
      <Header />
      <Logo />
      {/* <Switch>


      </Switch> */}
      <Footer />
    </div>
  );
}

export default App;
