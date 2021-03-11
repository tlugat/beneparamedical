import '../navbar/Navbar.scss'
import {NavLink} from 'react-router-dom'
import PodoOrtheseNav from './subnav/podo-orthese/Podo-ortheseNav'
import OrthopedieGeneraleNav from './subnav/orthopedie-generale/Orthopedie-generale';
import Cross from '../../assets/logo/cross/Cross';

const Navbar = ({menuIsActive, toggleMenu}) => {
  let desktop = false;
  const navBarStyle = menuIsActive ? "navBar navBar--active" : "navBar";
  return (
    <nav className={navBarStyle}>
      {/* <Cross toggleMenu={toggleMenu} /> */}
      <ul className={"navList"}>
        <li><NavLink to="/" exact activeClassName="navList__itemActive">Accueil</NavLink></li>
        <li><NavLink to="/podo-orthese" activeClassName="navList__itemActive">Podo-Orthèse</NavLink></li>
        <li><NavLink to="/orthopedie-generale" activeClassName="navList__itemActive" >Orthopédie générale</NavLink></li>
        <li><NavLink to="/materiel" activeClassName="navList__itemActive">Matériel</NavLink></li>
        <li><NavLink to="/contact" activeClassName="navList__itemActive">Contact</NavLink></li>
      </ul>
      {desktop && (
        <>
          <PodoOrtheseNav/>
          <OrthopedieGeneraleNav/>
        </>
      )}
      
    </nav>
    
  )
}

export default Navbar