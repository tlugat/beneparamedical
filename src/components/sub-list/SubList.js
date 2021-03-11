import {NavLink} from 'react-router-dom';
import {useState} from 'react';
import cx from 'classnames';

import styles from './SubList.module.scss';

const SubList = ({match}) => {

  const [isActive, setIsActive] = useState(true);

  const items = {
    links: [],
    values: [],
  };

  if(match.url === "/podo-orthese") {
    items.links = ["/chaussures-orthopediques", "/ortheses-plantaires", "/appareil-podo-jambier", "/chaussures-therapeutiques", "/reparations", "/pneumaflex", "/outils-diagnostic-et-production"];
    items.values = ["Chaussures orthopédiques", "Orthèses plantaires", "Appareil podo-jambier", "Chaussures thérapeutiques", "Réparations", "Centre de compétence Pneumaflex", "Outils de diagnostic et production"];
    } else if(match.url === "/orthopedie-generale") {
      items.links = ["/membres-superieurs", "/cervicales", "/dos", "/abdomen", "/hanche", "/membres-inferieurs", "/contention-veineuse"];
      items.values = ["Membres supérieurs", "Les cervicales", "Le dos", "L'abdomen", "La hanche", "Les membres inférieurs", "Contention veineuse"];
  };

  const listClasses = cx(styles.subList__list, !isActive && styles.inactive);

  return (
    <div className={styles.subList}>
        <ul className={ listClasses }>
          {items.links.map((item, i) => {
            return <li key={i}><NavLink to={match.url + item}>{items.values[i]}</NavLink></li>
          })}
        </ul>
        <div className={styles.subList__hide}>
          <p onClick={() => setIsActive(!isActive)} className={styles.subList__hideBtn}>Cacher le menu</p>
        </div>
      
    </div>
    
    
  )
}

export default SubList