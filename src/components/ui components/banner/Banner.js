import orthopedie_generale_img from "../../../assets/img/orthopedie-generale-hero-small.png";
import podo_orthese_img from "../../../assets/img/podo-orthese-small.png";
import materiel_img from "../../../assets/img/materiel-small.png";
import contact_img from "../../../assets/img/contact-small.png";
import placeholder from "../../../assets/img/placeholder.png";

import styles from './Banner.module.scss';

const Banner = ({match}) => {
  let background;
  let title;
  switch(match.url) {
    case "/orthopedie-generale" :
      background = orthopedie_generale_img;
      title = "Orthopédie Générale";
      break;
    case "/podo-orthese":
      background = podo_orthese_img;
      title = "Podo-Orthèse";
      break;
    case "/materiel":
      background = materiel_img;
      title = "Matériel";
      break;
    case "/contact":
      background = contact_img;
      title = "Contact"
      break;
    default: 
      background = placeholder;
  }
  return (
    <div style={{ background: `url(${background}) no-repeat` }} className={styles.banner}>
      <h1 className={styles.banner__title}>{title}</h1>
    </div>
  )
}

export default Banner