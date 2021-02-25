import doctor_small from '../../../assets/img/doctor-small'
import styles from '../heroHome/HeroHome.module.scss';
import dots from '../../../assets/logo/dots/dots.svg';
const HeroHome = () => {
  return (
      <div className={styles.hero}>
        <div className={styles.dots}>
        <svg width="38" height="81" viewBox="0 0 38 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="3.70286" cy="3.47143" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="3.70286" cy="47.9058" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="3.70286" cy="18.2828" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="3.70286" cy="62.7172" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="3.70286" cy="33.0942" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="3.70286" cy="77.5286" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="18.9771" cy="3.47143" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="18.9771" cy="47.9058" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="18.9771" cy="18.2828" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="18.9771" cy="62.7172" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="18.9771" cy="33.0942" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="18.9771" cy="77.5286" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="33.7886" cy="3.47143" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="33.7886" cy="47.9058" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="33.7886" cy="18.2828" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="33.7886" cy="62.7172" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="33.7886" cy="33.0942" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
        <ellipse cx="33.7886" cy="77.5286" rx="3.70286" ry="3.47143" fill="#5E70B1"/>
      </svg>
        </div>
        
        <div className={styles.hero__ellipse}></div>
        <img className={styles.hero__picture} src={doctor_small} alt="a doctor whith his white blouse"></img>
      </div>
    
  )  
}

export default HeroHome