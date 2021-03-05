import logo from '../../assets/logo/logo.svg';
import BurgerIcon from '../../assets/logo/burgerMenu/BurgerIcon';
import styles from '../../components/header/Header.module.scss';


const Header = ({toggleMenu}) => {

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo"/>
      <BurgerIcon toggleMenu={toggleMenu}/>
    </header>
  )
}

export default Header