import Logo from '../../assets/logo/Logo';
import BurgerIcon from '../../assets/logo/burgerMenu/BurgerIcon';
import styles from '../../components/header/Header.module.scss';

const Header = ({toggleMenu}) => {
  return (
    <header className={styles.header}>
      <Logo/>
      <BurgerIcon toggleMenu={toggleMenu}/>
    </header>
  )
}

export default Header