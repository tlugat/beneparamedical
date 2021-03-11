import cx from 'classnames';

import styles from './BugerIcon.module.scss';

const BurgerIcon = ({toggleMenu, menuIsActive}) => {

  const classes = cx(styles.burger, menuIsActive && styles.active);

  return (
    <div onClick={toggleMenu} className={classes}>
      <span></span>
    </div>
  )
}

export default BurgerIcon