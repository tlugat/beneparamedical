import {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import Header from '../header/Header'
import Home from "../home/Home";
import styles from '../app/App.module.scss'

function App() {

  const [menuIsActive, setMenuIsActive] = useState(false);

  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive)
  }
  


  return (
    <div className={ menuIsActive ? styles.AppOff : styles.App}>
      <Router>
        <Header toggleMenu={toggleMenu}/>
        <Navbar toggleMenu={toggleMenu} menuIsActive={menuIsActive}/>
        <Route exact path="/"><Home/></Route>
      </Router>
      
    </div>
  );
}

export default App;
