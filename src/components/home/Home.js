import {Link} from 'react-router-dom';
import Hero from '../ui components/heroHome/HeroHome';
import styles from '../home/Home.module.scss';
const Home = () => {
  return (
    <div className={styles.home}>
      <Hero/>
      <div className={styles.home__text} >
        <h1>Béné Paramedical</h1>
        <p>Nos deux sociétés Béné Paramedical Centre et ATPO PL regroupent 17 collaborateurs et collaboratrices à votre service dans les domaines de l'appareillage des pieds, de l'orthopédie générale et du conseil et de la vente de matériel médical.</p>
    </div>
    <div className={styles.home__cta}>
      <button><Link to="/podo-orthese">Découvrir</Link></button>
      <button><Link to="/contact">Consulter</Link></button>
    </div>
    
    </div>
    
    
  )
}
export default Home