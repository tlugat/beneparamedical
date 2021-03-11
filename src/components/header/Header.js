import logo from '../../assets/logo/logo.svg';
import BurgerIcon from './burgerMenu/BurgerIcon';
import styles from '../../components/header/Header.module.scss';


const Header = ({toggleMenu, menuIsActive}) => {

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo"/>
      <BurgerIcon menuIsActive={menuIsActive} toggleMenu={toggleMenu}/>
    </header>
  )
}

export default Header