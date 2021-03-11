import {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Navbar from '../navbar/Navbar';
import Header from '../header/Header'
import Home from "../home/Home";
import PodoOrthese from '../podo-orthese/Podo-orthese';
import OrthopedieGenerale from '../orthopedie-generale/OrhtopedieGenerale';
import Footer from '../footer/Footer';
import Materiel from '../materiel/Materiel';
import Contact from '../contact/Contact';

import styles from '../app/App.module.scss'


function App() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive)
  }
  


  return (
    <div style={menuIsActive ? {height: 100 + 'vh'} : {height: 'auto'}} className={styles.App}>
      <Router>
        <Header menuIsActive={menuIsActive} toggleMenu={toggleMenu}/>
        <Navbar toggleMenu={toggleMenu} menuIsActive={menuIsActive}/>
        <Route exact path="/" component={Home}></Route>
        <Route path="/podo-orthese" component={PodoOrthese}></Route>
        <Route path="/orthopedie-generale" component={OrthopedieGenerale}></Route>
        <Route path="/materiel" component={Materiel}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
