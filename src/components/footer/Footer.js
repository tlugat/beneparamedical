import {NavLink} from 'react-router-dom';

import logo from '../../assets/logo/logo.svg';
import styles from './Footer.module.scss';


const Footer = () => {
  return (
    <div className={styles.footer}>
      <img src={logo} alt="logo" className={styles.footer__logo}/>
      <div className={styles.footer__member}>
        <p className={styles.title}>Membre</p>
        <p>Membre de la FFPO (Fédération Française de la Podo-orthèse)
          <br/>
          (CNSPO & UPODEF)
        </p>
      </div>
      <div className={styles.footer__nav}>
        <p className={styles.title}>Navigation</p>
        <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/podo-orthese">Podo-orthèse</NavLink></li>
          <li><NavLink to="/orthopedie-generale">Orthopédie générale</NavLink></li>
          <li><NavLink to="/divers">Divers</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <NavLink className={styles.title} to="/cgv">Conditions générales de ventes (CGV)</NavLink>
      <NavLink className={styles.title} to="/mentions-legales">Mentions légales</NavLink>
    </div>
  )
}

export default Footer