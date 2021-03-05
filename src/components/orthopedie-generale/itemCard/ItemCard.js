import membres_sup from '../../../assets/img/membres-sup-small.png';
import cervicales from '../../../assets/img/cervicales-small.png';
import dos from '../../../assets/img/dos-small.png';
import hanche from '../../../assets/img/hanche-small.png';
import membres_inf from '../../../assets/img/membres-inf-small.png';
import abdomen from '../../../assets/img/abdomen-small.png';
import contention_veineuse from '../../../assets/img/contention-veineuse-small.png';
import placeholder from '../../../assets/img/placeholder.png';

import styles from './ItemCard.module.scss';

const ItemCard = ({data}) => {
  let img;
  switch(data.title) {
    case "Membres supérieurs":
      img = membres_sup;
    break;
    case "Les cervicales":
      img = cervicales;
      break;
    case "Le dos":
      img = dos;
      break;
    case "L'abdomen":
      img = abdomen;
      break;
    case "La hanche":
      img = hanche;
      break;
    case "Membres inférieurs":
      img = membres_inf;
      break;
    case "Contention veineuse":
      img = contention_veineuse;
      break;
    default:
      img = placeholder;
      break;
  }
 
  return (
    <div className={styles.itemCard}>
      <img src={img} alt={data.img.alt}/>
      <div className={styles.itemCard__info + ' info'}>
        <div className={styles.info__head}>
          <h2>{data.title}</h2>
          <p>{data.accroche}</p>
        </div>
        <div className={styles.info__body}>
          <p>Cela concerne :</p>
          <br/>
          <ul>
            {data.list.map((item,i )=> <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
    
  )
}

export default ItemCard 