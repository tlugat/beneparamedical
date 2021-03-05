import {Link} from 'react-router-dom';
import styles from './RdvCard.module.scss';
import logo from '../../../assets/logo/rdvCard/rdvCard-logo.svg';
const RdvCard = () => {
  return (
    <div className={styles.rdvCard}>
      <img src={logo} alt="a doctor whith patients"/>
      <div className={styles.rdvCard__text}>
        <h2>Psssss ! Pour prendre rendez-vous c'est par ici !</h2>
        <p> Prescription en main, sur rendez-vous avec un podo-orthésiste dans l’un de nos établissements,  des prises de mesures et moulages nécessaires a la fabrication de vos chaussures seront réalisés.</p>
      </div>
      <Link to="/contact" className={styles.rdvCard__cta}>Consulter</Link>
    </div>
  )
}

export default RdvCard